import React from "react";
import "../dock.css";

import finder from "../img/finder.png";
import ClassLogo from "../img/61bLogo.png";
import resources from "../img/resources.png";
import websiteLogo from "../img/orangeFloof.png";



export default function Dock() {
    return (
        <div className="dock">
            <span className="spanner">
				<img src="https://image.ibb.co/mHAnwK/nav.png" class="img-fluid" alt="nav" />
			</span>
            <div className="dock-nav">
                <ul>
                    <li>
                        <a><img src={finder} className="img-fluid" width="40" height="40"/></a>
                    </li>
                    <li>
                        <img src={ClassLogo} className="img-fluid" width="40" height="40"></img>
                    </li>
                    <li>
                        <img src={resources} className="img-fluid" width="40" height="40"></img>
                    </li>
                    <li> 
                        <a href="http://ayushsehgal.com" target="_blank">
                            <img src={websiteLogo} className="img-fluid" width="40" height="80" />
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}