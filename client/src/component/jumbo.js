import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../css/jumbo.css";

class Jumbo extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            
            <h2>Welcome to The Office Game!</h2>
          </div>
          <p className="App-intro">
            Pick the game you would like to play!
          </p>
        <Link to="/game1" > <button> Game 1</button> </Link>
        <Link to="/game2" > <button> Game 2</button> </Link>
        <a href = "https://clickygame823.herokuapp.com/" rel="noopener noreferrer" target = "_blank"><button>clicky game</button></a>
        </div>
      );
    }
  }

export default Jumbo;