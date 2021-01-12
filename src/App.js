import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dock.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeaderDock from "./components/HeaderDock";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CS61B from "./pages/CS61B";
import Dock from "./components/Dock";
import Resources from "./components/Resources";

import finder from "./img/finder.png";
import ClassLogo from "./img/61bLogo.png";
import resources from "./img/resources.png";
import websiteLogo from "./img/orangeFloof.png";


class App extends Component {

  constructor() {
    super();
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
      // <Router>
      //   <div className="App">
      //     <Header />
      //     <Switch>
      //       <Route path="/" exact component={Home} />
      //       <Route path="/CS61B" component={CS61B} />
      //     </Switch>
      //     <Home show={true}/>
      //     <Dock />
      //     <Footer />
      //   </div>
      // </Router>
      <div className="App">
        <HeaderDock />
        {this.state.home && <Home />}
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
                          <a><img src={ClassLogo} className="img-fluid" width="40" height="40"></img></a>
                      </li>
                      <li>
                          <a onClick={() => {this.showComponenet("resource")}}><img src={resources} className="img-fluid" width="40" height="40"></img></a>
                      </li>
                      <li> 
                          <a href="http://ayushsehgal.com" target="_blank">
                              <img src={websiteLogo} className="img-fluid" width="40" height="80" />
                          </a>
                      </li>
                  </ul>
                  
              </div>
          </div>
        <Footer />
      </div>
    );  
  }
}
 
export default App;


