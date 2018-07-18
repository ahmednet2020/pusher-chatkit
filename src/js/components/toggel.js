import React, { Component } from 'react';
//toogel component react-level2
export default class Toggel extends Component 
{
	constructor(props) {
		super(props);
		this.state = {
			on:false
		};
		this.toggelButton = this.toggelButton.bind(this);
	}
	toggelButton(){
		this.setState({
			on:!this.state.on
		});
	}
	render()
	{
		const { children } = this.props;
		return (children({on:this.state.on, toggle:this.toggelButton}))
	}
}