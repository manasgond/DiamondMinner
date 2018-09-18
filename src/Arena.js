import React, { Component } from 'react';
import {font, width,height} from './Parameter';
import Square from './Square';
import EmptyBox from './Empty';

class Arena extends Component {
	constructor(props){
		super(props);
		this.state={
			luckyNumberArr:[],
			totalNumber:[],
		}
		this.updateScoreCard=this.updateScoreCard.bind(this);


	}
	componentDidMount(){
		this.randomization();
	}

 	render() {
 		var totalNumber =this.state.totalNumber;
 		var luckyNumberArr =this.state.luckyNumberArr;

	    return (
	      	<div style={{display:'flex',flexDirection:'row',width:width*0.44,flexWrap: 'wrap'}}>
	      		{
	      			totalNumber.map((totalNumber)=>{
	      				return(
	      					<div>
		      					{
				      				(luckyNumberArr.indexOf(totalNumber) > -1) ?
				      				<div>
							    		<Square  changeScore={this.updateScoreCard} />
							    	</div>
							      
							      	:
							      	<div>
							      		<EmptyBox changeScore={this.updateScoreCard} />
							      	</div>
							      	
		      					}
	      					</div>
	      				)

			    	})
				}
	    	</div>
	    );
  	}
  	updateScoreCard(){
  		console.log("second called");
  		this.props.updateScore();
  	}

  	randomization(){
  		var luckyNumberArr =[];
  		var totalNumber = [];
  		for (let i =0; i<8;i++){
  			var randomNumber = Math.ceil(64*Math.random());
  			if(luckyNumberArr.includes(randomNumber)){
  				luckyNumberArr.push(randomNumber+1);

  			}
  			else{
  				luckyNumberArr.push(randomNumber);
  			}
  		}
  		for(let i=0;i<64;i++){
  			totalNumber.push(i);
  		}
  		this.setState({luckyNumberArr:luckyNumberArr, totalNumber:totalNumber});
  	}
}

export default Arena;

const pageStyle={
	smallSquare:{
		border:'1px solid #c5c5c5',
		width:width*0.05,
		cursor:'pointer',
		height:width*0.05,
		display:'flex',

	}
}