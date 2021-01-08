import React, { Component } from "react";
import Dock from "react-osx-dock";

import finder from "../img/finder.png";

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Dock width={200} magnification={1.2} magnifyDirection="center" className="dock" backgroundClassName="dock-background">
                <Dock.Item>
                    <img src={finder} width="40" height="40"/>
                </Dock.Item>

            </Dock>
        );
    }
}
 
export default Base;

