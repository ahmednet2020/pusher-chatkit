import React, { Component } from 'react';

export default class NewRoom extends Component 
{
	render()
	{
		return (
			<section className="new-room">
				<form>
					<input type="text" placeholder="Create a room" name="newroom" required />
					<input type="submit" value="+"/>
				</form>
			</section>
			)
	}
}

