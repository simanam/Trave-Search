import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, InputBase } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { Autocomplete } from "@react-google-maps/api";
import mapStyles from "./mapStyles.js";

import useStyles from "./styles.js";
import { Box } from "@mui/system";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px )");
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const [isOpen, setIsOpen] = useState(false);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
        className={classes.onMap}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            onClick={() => setIsOpen(!isOpen)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="Large " />
            ) : (
              <div className={classes.ringContainer}>
                <Paper elevation={3} className={classes.paper}>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />

                  <Box className={classes.mapCardBox}>
                    <Typography
                      className={classes.mapCardName}
                      variant="body2"
                      gutterBottom
                    >
                      {place.name}
                    </Typography>
                    {place?.rating && (
                      <Rating
                        size="small "
                        name="half-rating-read"
                        value={Number(place.rating)}
                        precision={0.5}
                        readOnly
                      />
                    )}
                  </Box>
                </Paper>
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#1a2b41",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "23px",
                    left: "23px",
                  }}
                ></div>
                <div
                  style={{
                    border: "3px solid #62bd19",
                    borderRadius: "30px",
                    height: "25px",
                    width: "25px",
                    position: "absolute",
                    left: "15px",
                    top: "15px",
                    animation: "pulsate 1s ease-out",
                    animationIterationCount: "infinite",
                    opacity: "0.0",
                  }}
                ></div>
              </div>
            )}
          </div>
        ))}

        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div height={100} key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
              />
            </div>
          ))}
      </GoogleMapReact>
      <Autocomplete
        className={classes.search}
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <div>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        </div>
      </Autocomplete>
    </div>
  );
};
export default Map;

{
  /* {place?.rating && (
                  <Rating
                    size="small "
                    name="half-rating-read"
                    value={Number(place.rating)}
                    precision={0.5}
                    readOnly
                  />
                )} */
}
{
  /* <Typography
                  className={classes.typography}
                  variant="subtitle1"
                  gutterBottom
                >
                  {place.name}
                </Typography> */
}
