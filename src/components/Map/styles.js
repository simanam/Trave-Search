import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    position: "relative",
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "auto",
    // minWidth: "200px",
    bottom: "6em",
    justifyContent: "space-between",
  },
  mapContainer: {
    height: "100vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  onMap: {
    justifyContent: "top",
    alignItems: "center",
  },
  pointer: {
    cursor: "relative",
    width: "50px",
    height: "50px",
  },
  search: {
    position: "relative",
    bottom: "95%",
    zIndex: "100",
    left: "15%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 1) },

    width: "70%",
    height: "5%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.5, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
  ringContainer: {
    position: "relative",
  },
  mapCardBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "5px",
  },
  mapCardName: {
    fontWeight: "1000px",
  },
}));
