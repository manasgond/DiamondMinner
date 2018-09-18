import React, { Component } from 'react';
import {height,width,font,fontXL,fontM,fontS,fontL} from './Parameter';


class Score extends Component {
	constructor(props){
		super(props);
		this.state={


		}
		
	}
  	render() {
  		var score=this.props.score
    	return (
      		<div style={pageStyle.container}>
       			<div style={{fontSize:fontXL,alignItems:'center',display:'flex',fontWeight:'700',marginBottom:'10px'}}>
       				Diamond Minner
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontL,fontWeight:'700',marginBottom:'10px',backgroundColor:'#fff'}}>
       				Score Card
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontM,flexWrap: 'wrap',backgroundColor:'#fff',marginBottom:'20px'}}>
       				{score+"/64"}
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontL,fontWeight:'700',marginBottom:'10px'}}>
       				Game Rule
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontM,flexWrap: 'wrap',marginBottom:'20px'}}>
       				There is diamond hidden inside each Box.
       				Box are painted in green with its owner picture.
       				Once you click on the Box the box opens.
       				The Box may contain either "Diamond" or may be "Empty".
       				Try your luck !!!!.
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontL,fontWeight:'700',marginBottom:'10px'}}>
       				Score Rule
       			</div>
       			<div style={{display:'flex',alignItems:'center',fontSize:fontM,flexWrap: 'wrap',marginBottom:'20px'}}>
       				On start of game you get 64 points.
       				Your 1 point decreases for each click on box.
       				Game gets over either you open all boxes or either find all 8 Diamond hidden inside box.

       			</div>

      		</div>
    	);
  	}

}

export default Score;

const pageStyle={
	container:{
		display:'flex',
		flexDirection:'column',
		backgroundColor:'#f2e3cb',
		color:'#3f3e3b',
		border:'1px solid #000',
		paddingTop:height*0.02,
		paddingBottom:height*0.02,
		paddingLeft:width*0.02,
		paddingRight:width*0.02,
		width:width*0.20
	}
}