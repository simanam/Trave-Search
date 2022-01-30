import React from "react";
import Grid from "@mui/material/Grid";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles.js";
import { deepOrange } from "@mui/material/colors";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlaceDetailCard from "../PlaceDetails/placeDetails";
import Avatar from "@mui/material/Avatar";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = () => ({
  contentContainer: {
    display: "block",
    justifyContent: "center",
  },
  topBox: {
    display: "flex",
    width: "95%",
    height: "8%",

    marginBottom: "5px",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid #E8E8E8 1px",
  },
  discover: {
    color: "#C8C8C8",
  },
  avatarNoti: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
  },
  topSecBox: {
    display: "flex",
    width: "95%",
    height: "10%",
    marginTop: "20px",
    marginBottom: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid #E8E8E8 1px",
  },
  inputSearch: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  list: {
    height: "75vh",
    overflow: "auto",
    marginTop: "100px",
  },
});

class PlaceListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "restaurants",
      rating: "",
    };
  }
  typeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  ratingChange = (e) => {
    this.setState({
      rating: e.target.value,
    });
  };
  componentDidMount() {
    this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }
  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    const { classes, places } = this.props;
    console.log(places);

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
            <Select
              value={this.state.type}
              onChange={(e) => this.typeChange(e)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={this.state.rating}
              onChange={(e) => this.ratingChange(e)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3} className={classes.list}>
          {places.map((place, i) => (
            <Grid item xs={12} key={i} data-aos="fade-in">
              <PlaceDetailCard place={place} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(PlaceListClass);
