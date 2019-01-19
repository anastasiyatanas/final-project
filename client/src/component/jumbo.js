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
           
            <h2>Welcome to Dunder Mifflin Paper Company!</h2>
          </div>
          <p className="App-intro">
            Pick the game you would like to play!
          </p>
        <Link to="/game1" > <button class="button">
          <h2>Flappy Office</h2>
          <p>Currently under construction and will be coming soon!</p>
          </button> </Link>
        <a href = " https://anastasiyatanas.github.io/space-invader/" rel="noopener noreferrer" target = "_blank">
        <button class="button">
        <h2>Office Invaders</h2>
          <p>Help Michael defeat his worst enemy from the office in order to protect the rest of the crew from corporate.</p>
          </button></a>
        <a href = "https://clickygame823.herokuapp.com/" rel="noopener noreferrer" target = "_blank">
        <button class="button">
        <h2>Clicky</h2>
          <p>Make sure not to click the same image twice! Did I stutter???</p>
          </button></a>
        <a href = "https://anastasiyatanas.github.io/officeTrivia/" rel="noopener noreferrer" target = "_blank">
        <button class="button">
        <h2>Trivia</h2>
          <p>Think you know the office? Time to find out in this Dunder Mifflin challenge.</p>
          </button></a>
        </div>
      );
    }
  }

export default Jumbo;