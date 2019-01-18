import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import '../css/game.css';

class Login extends Component {
    state = {
        isLoggedIn: false,
        userID:'',
        name: '',
        email:'',
        picture:''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email:response.email,
        picture:response.picture.data.url
        })
    }

    componentClicked= () => console.log("clicked");

    render() {
      let fbContent;
      if(this.state.isLoggedIn) {
        fbContent=(
            <div style={{
                width:'400px',
                margin:'auto',
                background: 'grey',
                padding:'20px'
            }}>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>welcome {this.state.name}</h2>
            Email:{this.state.email}
            </div>
        );
      } else{
          fbContent= (<FacebookLogin
            appId="606824983071355"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}/>);
      }
      return (
        <div className="App">
          {fbContent}
            
            
        </div>
      
      );
    }
  }

export default Login;