import React, { Component } from 'react';
import Diamond from './Assests/images/diamond.png';
import Note from './Assests/images/notes.png';
import Empty from './Assests/images/empty.png';
import {font, width,height} from './Parameter';// setting global style set

class EmptyBox extends Component {
	constructor(props){
		super(props);
		this.state={
			clicked:false,


		}
		this._handelNoteClick = this._handelNoteClick.bind(this);

	}

 	render() {
	    return (
	      	<div style={{display:'flex',flexDirection:'row'}}>
		      	<div style={pageStyle.smallSquare} onClick={this._handelNoteClick}>
			      	{
			      		(this.state.clicked ===false ) ?
			      			<img src={Note} width={width*0.05} />
			      			:
			      			<img src={Empty} width={width*0.05} />
			      	}
		      	</div>
	    	</div>
	    );
  	}

  	_handelNoteClick(){
  		//if condition to validate only one click is getting counted
  		if(!this.state.clicked){
	  		console.log("hello at empty");
	  		this.setState({clicked:true});
	  		this.props.changeScore();
  		}
  		else{
  			console.log("don't click me again ")
  		}
  	}
}

export default EmptyBox;

const pageStyle={
	smallSquare:{
		border:'1px solid #f4b342',
		width:width*0.05,
		cursor:'pointer',
		height:width*0.05,
		display:'flex',

	}
}