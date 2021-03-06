import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import '../css/game.css';

class Login extends Component {
    state = {
        isLoggedIn: false,
        userID:'',
        name: '',
        email:'',
        picture:''
    }

    createUser = (userData) =>{
        return axios.post("/api/users", userData).then(res => console.log (res))
        
    }
    responseFacebook = response => {
        const userData= {name:response.name, 
            image:response.picture.data.url,}
            this.createUser(userData)    
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
                // width:'400px',
                // margin:'auto',
                // background: 'grey',
                // padding:'20px'
            }}>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Hey {this.state.name}!</h2>
            
            </div>
        );
      } else{
          fbContent= (<FacebookLogin
            appId="606824983071355"
            autoLoad={true}
            fields="name,picture"
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