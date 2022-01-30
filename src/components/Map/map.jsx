import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, InputBase } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Rating from "@mui/material/Rating";
import { Autocomplete } from "@react-google-maps/api";

import useStyles from "./styles.js";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px )");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBZk7JZOkVMtQaYTE8OhJBAJQnSZGkR_GY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
        className={classes.onMap}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="Large " />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle1"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                {place?.rating && (
                  <Rating
                    size="small "
                    name="half-rating-read"
                    value={Number(place.rating)}
                    precision={0.5}
                    readOnly
                  />
                )}
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
        />
      </div>

      {/* <Autocomplete> */}

      {/* </Autocomplete> */}
    </div>
  );
};
export default Map;
