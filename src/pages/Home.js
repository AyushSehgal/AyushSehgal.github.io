import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Window, TitleBar, Text, Button } from "react-desktop/macOs";
import profi from "../img/prof.png";

import Intro from "../components/Intro";
import Resources from "../components/Resources";

import Dock from "react-osx-dock";
import finder from "../img/finder.png";


function Home() {
  
  return (
    <div className="App">
      <h1 className="App-header">Welcome!</h1>
      <br />
      <center>
        <Window
          chrome
          width="75vw"
          height="43vh"
          padding="15px"
        >
          <img
              className="img-fluid"
              src={profi}
              alt="Card image cap"
              style={{ width: "14vw", height: "36vh", minWidth: "200px", padding: "10px"}}
            ></img>
          <TitleBar
          title="Home"
          controls
        />
        
          <Text size="15">
            <br />
            Glad you stumbled upon this site. The point of this space is
                    for me to post resources I have either made and/or compiled
                    for various classes in the EECS department at UC Berkeley.
                    Some of this stuff are resources from courses when I was a
                    student and others are from my time as a member of course
                    staff. Hope this stuff helps. To get to know me better and for
                    some of my projects, click the Personal Site link in the
                    header. Yes, I have a separate website for that stuff (thanks
                    to free online web hosting and some spare time in quarantine).
                    <br />
                    <br />
                    Checkout my personal github and linkedin page!     
          </Text>
          
          
                    
        </Window>
      </center>
     
      
    </div>
  );
}

export default Home;
