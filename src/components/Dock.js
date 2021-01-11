import React from "react";
import "../dock.css";

import finder from "../img/finder.png";
import ClassLogo from "../img/61bLogo.png";
import resources from "../img/resources.png";

export default function Dock() {
    return (
        <div className="dock">
            <span className="spanner">
				<img src="https://image.ibb.co/mHAnwK/nav.png" class="img-fluid" alt="nav" />
			</span>
            <div className="dock-nav">
                <ul>
                    <li>
                        <img src={finder} className="img-fluid" width="40" height="40"></img>
                    </li>
                    <li>
                        <img src={ClassLogo} className="img-fluid" width="40" height="40"></img>
                    </li>
                    <li>
                        <img src={resources} className="img-fluid" width="40" height="40"></img>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}