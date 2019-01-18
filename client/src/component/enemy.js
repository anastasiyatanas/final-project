import React from 'react';
import '../css/game.css';

const images = [
    {id:0, imgURL: "assets/img/andy.jpg", clicked:false},
    {id:1, imgURL: "assets/img/angela.jpg", clicked:false},
    {id:2, imgURL: "assets/img/dwight.jpg", clicked:false},
];
var enemy 

class Enemy extends React.Component {
    state = {
        array: images};

    handleClick = id => {
        var {array} = this.state
         for(var i = 0; i < array.length; i++){
           if (array[i].id === id)  {
               if (!array[i].clicked){
                   array[i].clicked=true
                  }
                //   if (array[i].id=true){
                //     array[i] = mainCharacter
                //    }
                for(var j = 0; j < array.length; j++) {
                    if (array[j].clicked) {
                        array[j].clicked=false
                    }
                }
             }
          }   
          
  }
    render() {
        return(
            <div>
            
            {this.state.array.map(image =>( 
                <img class="images" src={image.imgURL} alt="" key={image.id} onClick={()=>this.handleClick(image.id)}/>

            ))}
            {enemy}
            
            </div>
        );
    }
}

export default Enemy;