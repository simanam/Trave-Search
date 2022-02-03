import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  chip: {
    margin: "0 5px 5px 0",
    width: "auto",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardContainer: {
    display: "flex",
    alignItems: "space-between",
    borderRadius: "15px",
  },
  cardContentBox: { width: "90%" },
  cardContent: { width: "90%" },
  name: { fontSize: "1.2rem" },
  cardAction: { display: "flex", justifyContent: "space-between" },
  distance: { display: "flex", alignItems: "center", color: "#C8C8C8" },
  ratingBox: { marginTop: "25px" },
}));
