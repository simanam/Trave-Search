import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  IconButton,
} from "@material-ui/core";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import Rating from "@mui/material/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        style={{ height: 200, width: "30%", borderRadius: "15px" }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <Box className={classes.cardContentBox}>
        <CardContent className={classes.cardContent}>
          {/* {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))} */}
          <Typography className={classes.name} gutterBottom variant="h5">
            {place.name}
          </Typography>
          {place?.address && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
            >
              {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <PhoneIcon /> {place.phone}
            </Typography>
          )}

          {/* <CardActions className={classes.cardAction}>
            <Box>
              <IconButton
                size="small"
                color="primary"
                onClick={() => window.open(place.web_url, "_blank")}
              >
                <AllInclusiveIcon />
              </IconButton>
              <IconButton
                size="small"
                color="primary"
                onClick={() => window.open(place.website, "_blank")}
              >
                <LanguageIcon />
              </IconButton>
            </Box>
          </CardActions> */}
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            className={classes.ratingBox}
          >
            {place?.rating && (
              <Rating
                name="half-rating-read"
                value={Number(place.rating)}
                precision={0.5}
                readOnly
              />
            )}
            <Typography
              gutterBottom
              variant="body2"
              className={classes.distance}
            >
              {place.num_reviews} review{place.num_reviews > 1 && "s"}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
export default PlaceDetails;
