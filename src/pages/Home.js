import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Typography } from "@material-ui/core";

function Home() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome!</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          background: "#282c34",
          color: "white",
          // minHeight: "75%",
          width: "90vw",
          height: "540px",
          margin: "auto",
        }}
      ></Grid>
    </div>
  );
}

export default Home;
