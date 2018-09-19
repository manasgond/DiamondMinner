import React, { Component } from 'react';
import Score from './Score';
import Arena from './Arena';
import {font, width,height,fontM,fontL,fontS} from './Parameter';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
        score:64,
        diamondCollected:0,

      }
      this.scoreCard = this.scoreCard.bind(this);
      this.diamondCollected =this.diamondCollected.bind(this);

    }
    render() {
      return (
        <div >
          <div style={pageStyle.container}>

            <Arena  style={{display:'flex'}} updateScore={this.scoreCard} diamondCollected={this.diamondCollected}/>
            <Score  style={{display:'flex'}} score={this.state.score} />
            {
              (this.state.diamondCollected === 8 && this.state.score !== 0)?
              <div style={pageStyle.success}>
                {"Hurray!!! You won the game. You score is "+this.state.score }
              </div>
              :
              null
            }
          </div>
        </div>
      );
    }
    diamondCollected(){
      console.log("diamond collected");
      this.setState({diamondCollected:this.state.diamondCollected+1})
    }
    scoreCard(){
      console.log("score card clicked");
      this.setState({score:this.state.score-1});
        
    }
}

export default App;

const pageStyle ={
    container:{
      marginTop:height*0.05,
      marginLeft:width*0.15,
      marginRight:width*0.15,
      marginBottom:height*0.05,
      display:'flex',
      flexDirection:'row',
    },
    success:{
      display:'flex',
      position:'fixed',
      zIndex:'999',
      fontSize:fontM,
      color:"orange",
      padding:'5px',
      border:'1px solid #f1f1f1',
      width:width*0.70,
      backgroundColor:'#fff',

    }
}
