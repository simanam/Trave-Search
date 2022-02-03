import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PlaceList from "../components/placesList/placesList";

import Map from "../components/Map/map";
import { getPlacesData, getWeatherData } from "../api";
import useStyles from "./styles.js";

const Home = () => {
  const classes = useStyles();
  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      setIsLoading(true);
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [type, coordinates, bounds]);

  return (
    <>
      <Grid item xs={12} md={6} className={classes.contentContainer}>
        <PlaceList
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
          weatherData={weatherData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Grid>
    </>
  );
};

export default Home;
