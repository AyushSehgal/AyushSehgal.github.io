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
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CS61B" component={CS61B} />
          </Switch>
          <Footer />
        </div>
      </Router>
      
        
        
      
    );  
  }
}
 
export default App;


