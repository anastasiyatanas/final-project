import React, { Component } from "react";
import {Link} from "react-router-dom";
// import Login from './component/login';
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
          <a href = "https://anastasiyatanas.github.io/flappyBird/" rel="noopener noreferrer" target = "_blank"><button>Flappy office</button></a>
        <Link to="/game2" > <button>Office invaders</button> </Link>
        <a href = "https://clickygame823.herokuapp.com/" rel="noopener noreferrer" target = "_blank"><button>Clicky game</button></a>
        </div>
      );
    }
  }

export default Jumbo;