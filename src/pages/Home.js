import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "../components/Intro";

function Home() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome!</h1>
      <Intro />
    </div>
  );
}

export default Home;
