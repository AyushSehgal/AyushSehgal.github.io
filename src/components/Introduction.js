import React, { Component } from 'react';
import { Window, TitleBar, Text, Button } from "react-desktop/macOs";
import BlankWindow from "../components/BlankWindow";
import profi from "../img/prof.png";

class Introduction extends Component {
    state = {  }
    render() { 
        return ( <center>
            <Window
              chrome
              width="55vw"
              height="43vh"
              padding="15px"
            >
              <img
                  className="img-fluid"
                  src={profi}
                  alt="Card image cap"
                  style={{ width: "14vw", height: "36vh", padding: "10px"}}
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
          </center> );
    }
}
 
export default Introduction;