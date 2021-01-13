import React, { Component } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Introduction from "../components/Introduction"
import Resources from "../components/Resources";

import finder from "../img/finder.png";
import ClassLogo from "../img/61bLogo.png";
import resources from "../img/resources.png";
import websiteLogo from "../img/orangeFloof.png";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      home: true,
      resource: false 
    }
    this.showComponenet = this.showComponenet.bind(this);
  }

  showComponenet(tag) {
    switch (tag) {
      case "home":
        this.setState({home: true, resource: false});
        break;
      case "resource":
        this.setState({home: false, resource: true});
        break;
    }
}
  render() { 
    return (
      <div className="App">
        
      <h1 className="App-header">Welcome!</h1>
      <br />
        
        {this.state.home && <Introduction />}
          {this.state.resource && <Resources />}
          <div className="dock">
                <span className="spanner">
            <img src="https://image.ibb.co/mHAnwK/nav.png" class="img-fluid" alt="nav" />
          </span>
                <div className="dock-nav">
                    <ul>
                        <li>
                            <a onClick={() => this.showComponenet("home")}><img src={finder} className="img-fluid" width="40" height="40"/></a>
                        </li>
                        <li>
                            <a onClick={() => {this.showComponenet("resource")}}><img src={resources} className="img-fluid" width="40" height="40"></img></a>
                        </li>
                    </ul>
                    
                </div>
            </div>
    </div>
      
    );
  }
}
 
export default Home;


