import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CS61B from "./pages/CS61B";

// import finder from "./img/finder.png";
// import logo from "./img/61bLogo.png";

function App() {
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

export default App;
