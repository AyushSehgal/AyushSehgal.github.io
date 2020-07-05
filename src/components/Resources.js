import React, { Component } from "react";
import "../App.css";

class Resources extends Component {
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
        <div class="card-header">Quick Links</div>
        <ul class="list-group list-group-flush">
          <a
            href="https://github.com/AyushSehgal/Course-Content"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li class="list-group-item card-action">
              Github Repo: Houses all the course content I have personally
              developed
            </li>
          </a>

          <a
            href="https://hkn.eecs.berkeley.edu/courseguides"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li class="list-group-item card-action">
              HKN's Course Map for EECS/CS Majors
            </li>
          </a>
          <a
            href="http://guide.berkeley.edu/undergraduate/degree-programs/computer-science/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li class="list-group-item card-action">
              Academic Guide with Course List for EECS/CS Majors
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Resources;
