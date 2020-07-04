import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

function Home() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome!</h1>
      <Grid
        container
        direction="row"
        // justify="center"
        // alignItems="center"
        style={{
          background: "#343A40",
          color: "white",
          // minHeight: "75%",
          width: "90vw",
          // height: "540px",
          margin: "auto",
        }}
      >
        <Card
          style={{
            background: "#282c34",
            color: "white",
            margin: "auto",
          }}
        >
          <CardMedia image="public/logo192.png" title="profile" />
          <CardContent>
            Glad you stumbled upon this site. The point of this space is for me
            to post resources I have either made and/or compiled for various
            classes in the EECS department at UC Berkeley. Some of this stuff
            are resources from courses when I was a student and others are from
            my time as a member of course staff. Hope this stuff helps. To get
            to know me better and for some of my projects, click the Personal
            Site link in the header. Yes, I have a separate website for that
            stuff (thanks to free online website hosting!).
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;
