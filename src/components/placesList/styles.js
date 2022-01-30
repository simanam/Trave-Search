import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
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
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
}));
