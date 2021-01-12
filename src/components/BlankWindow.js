import React from "react";
import { Window, TitleBar, Text, Button } from "react-desktop/macOs";
export default function BlankWindow() {
    return (
        <div className="App">
    <h1 className="App-header">Welcome!</h1>
    <br />
        <center>
        <Window
          chrome
          width="55vw"
          height="43vh"
          padding="15px"
        >
          <TitleBar
          title="Home"
          controls
        />
        <Text>Click on something in the Dock, spent a lot of time getting this functionality coded :P</Text>
                       
        </Window>
      </center></div>);
}