import React, { Component } from 'react';
import Score from './Score';
import Arena from './Arena';
import {font, width,height} from './Parameter';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
        score:64,

      }
      this.scoreCard = this.scoreCard.bind(this);

    }
    render() {
      return (
        <div >
          <div style={pageStyle.container}>
            <Arena  style={{display:'flex'}} updateScore={this.scoreCard} />
            <Score  style={{display:'flex'}} score={this.state.score} />
          </div>
        </div>
      );
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
    }
}
