import React, { Component } from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import profi from "../img/prof.png";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div
        className="card"
        style={{
          background: "#282c34",
          color: "white",
          margin: "auto",
          width: "90vw",
          minWidth: "212px",
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2">
              <img className="img-fluid" src={profi} alt="Card image cap"></img>
            </div>
            <div className="col-sm-10">
              <p className="cardText" style={{ fontSize: "15pt" }}>
                <br />
                Glad you stumbled upon this site. The point of this space is for
                me to post resources I have either made and/or compiled for
                various classes in the EECS department at UC Berkeley. Some of
                this stuff are resources from courses when I was a student and
                others are from my time as a member of course staff. Hope this
                stuff helps. To get to know me better and for some of my
                projects, click the Personal Site link in the header. Yes, I
                have a separate website for that stuff (thanks to free online
                website hosting!).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
