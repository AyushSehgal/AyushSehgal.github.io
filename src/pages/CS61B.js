import React, { Component } from "react";
import "../App.css";

import Worksheet from "../components/Worksheet";

import file from "../img/file.png";

class CS61B extends Component {
  constructor() {
    super();
    this.state = {
      runtimeWorksheet: true
    };
  }
  
  render() {
    return (
      <div>
        <h1 className="App-header">Welcome to CS61B</h1>
        <br />
        {this.state.runtimeWorksheet && <Worksheet/>}
        <div className="dock">
                <span className="spanner">
            <img src="https://image.ibb.co/mHAnwK/nav.png" class="img-fluid" alt="nav" />
          </span>
                <div className="dock-nav">
                    <ul>
                        <li>
                            <a onClick={() => this.showComponent("home")}><img src={file} className="img-fluid" width="40" height="40"/></a>
                        </li>
                    </ul>
                    
                </div>
        </div>
      </div>
    );
  }
}

export default CS61B;
