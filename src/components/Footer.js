import React, { Component } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons/";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          background: "#343A40",
          left: "0",
          bottom: "0",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <div className="m-1">
          <a
            href="https://github.com/AyushSehgal/"
            target="_blank"
            className="m-1"
          >
            <GitHub style={{ color: "white" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-sehgal"
            target="_blank"
            className="m-1"
          >
            <LinkedIn style={{ color: "white" }} />
          </a>
        </div>
        <p style={{ color: "white", fontSize: "small" }}>
          Copyright © 2020 By Ayush Sehgal
        </p>
      </div>
    );
  }
}

export default Footer;
