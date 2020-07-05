import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "../components/Intro";
import Resources from "../components/Resources";

function Home() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome!</h1>
      <br />
      <Intro />
      <br />
      <Resources />
    </div>
  );
}

export default Home;
