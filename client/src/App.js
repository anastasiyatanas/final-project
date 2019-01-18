import React, { Component } from "react";
import Jumbo from "./component/jumbo";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameOne from "./component/game1";
import GameTwo from "./component/game2";
import GameThree from "./component/game3";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route path = "/" exact component = {Jumbo}/>
        <Route path = "/game1" component = {GameOne}/>
        <Route path = "/game2" component = {GameTwo}/>
        
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
