import React from "react";

import { CssBaseline, Grid, makeStyles } from "@material-ui/core";

import Map from "./components/Map/map";

import ContentBox from "./components/Content/contentBox";

const useStyle = makeStyles({
  leftRoot: { display: "flex" },
});

const App = () => {
  const classes = useStyle();
  return (
    <>
      <ContentBox />
    </>
  );
};

export default App;
