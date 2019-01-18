import React, { Component } from "react";
import {Link} from "react-router-dom";
import Login from './login';
import "../css/jumbo.css";

class Jumbo extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
          <Login></Login>
           
            <h2>Welcome to The Office Game!</h2>
          </div>
          <p className="App-intro">
            Pick the game you would like to play!
          </p>
          <a href = "https://anastasiyatanas.github.io/flappyBird/" rel="noopener noreferrer" target = "_blank"><button>Flappy office</button></a>
        <Link to="/game1" > <button>original</button> </Link>
        <a href = " https://anastasiyatanas.github.io/space-invader/" rel="noopener noreferrer" target = "_blank"><button>office invaders</button></a>
        <a href = "https://clickygame823.herokuapp.com/" rel="noopener noreferrer" target = "_blank"><button>Clicky game</button></a>
        <a href = "https://anastasiyatanas.github.io/officeTrivia/" rel="noopener noreferrer" target = "_blank"><button>Trivia</button></a>
        </div>
      );
    }
  }

export default Jumbo;