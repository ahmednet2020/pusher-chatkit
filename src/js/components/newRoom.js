import React, { Component } from 'react';
//create new room class
export default class NewRoom extends Component 
{
	submit(e)
	{
		e.preventDefault();
		const newroom = e.target.newroom.value;
		this.props.newRoom(newroom);
		e.target.reset();
	}
	//jsx function
	render()
	{
		return (
			<section className="new-room">
				<form onSubmit={this.submit.bind(this)}>
					<input type="text" placeholder="Create a room" name="newroom" autoComplete="off" required />
					<input type="submit" value="+"/>
				</form>
			</section>
			)
	}
}

