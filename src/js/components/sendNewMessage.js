import React, { Component } from 'react';

export default class SendNewMessage extends Component 
{
	render()
	{
		return (
			<section className="new-message">
				<form>
					<input type="text" placeholder="Create a room" name="newroom" required />
					<input type="submit" value="send"/>
				</form>
			</section>
			)
	}
}

