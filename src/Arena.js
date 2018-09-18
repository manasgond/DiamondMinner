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
		this.diamondCollected=this.diamondCollected.bind(this);


	}
	componentDidMount(){
		// calling the function to generate 8 random number
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
		      						//if true then will show diamond else blank box
				      				(luckyNumberArr.indexOf(totalNumber) > -1) ?
				      				<div>
							    		<Square  changeScore={this.updateScoreCard} diamondCollected={this.diamondCollected}/>
							    		
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
  		//case of upward binding mean child to parents
  		//console.log("second called");
  		this.props.updateScore();
  	}
  	diamondCollected(){
  			//case of upward binding mean child to parents
  		this.props.diamondCollected();
  	}

  	randomization(){
  		var luckyNumberArr =[];
  		var totalNumber = [];
  		//iterating till 8 because we need only 8 diamond
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
  		//there are the cases when the random no generated
  		//are less than 8 then refresh the browzer
  		if(luckyNumberArr.length<8){
 			window.location.reload();

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