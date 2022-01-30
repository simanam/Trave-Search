import React, { useState, useEffect, createRef } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";

import Avatar from "@mui/material/Avatar";

import useStyles from "./styles.js";
import { deepOrange } from "@mui/material/colors";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlaceDetailCard from "../PlaceDetails/placeDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const PlacesList = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      anchorPlacement: "bottom - top",
    });
  }, []);

  console.log({ childClicked });

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <>
      <Box className={classes.topBox}>
        <Typography variant="subtitle1" className={classes.discover}>
          Discover {`>`}
        </Typography>
        <div className={classes.avatarNoti}>
          <NotificationsNoneIcon />
          <Avatar
            sx={{ bgcolor: deepOrange[500], borderRadius: "10px" }}
            variant="square"
          >
            AS
          </Avatar>
        </div>
      </Box>

      <Box className={classes.topSecBox}>
        <Typography variant="h5">Search</Typography>

        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid ref={elRefs[i]} item xs={12} key={i}>
              <PlaceDetailCard
                place={place}
                selected={Number(childClicked) == i}
                refProp={elRefs[i]}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default PlacesList;
