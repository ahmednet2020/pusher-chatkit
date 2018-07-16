import React, { Component } from 'react';

export default class NewRoom extends Component 
{
	render()
	{
		return (
			<section className="new-room">
				<form>
					<input type="text" placeholder="Create a room" name="newroom" autoComplete="off" required />
					<input type="submit" value="+"/>
				</form>
			</section>
			)
	}
}

