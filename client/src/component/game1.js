import React, { Component } from "react";
import Player from "./player";
import Enemy from './enemy';
import Button from './button';
import '../css/game.css';

class GameOne extends Component {
    render() {
      <button>start</button>
      return (
        <div className="App">
            Pick your character!
            <Player div></Player>
            Pick your enemy!
            <Enemy div></Enemy>
            <button>Start</button>
            
            
        </div>
      
      );
    }
  }

export default GameOne;