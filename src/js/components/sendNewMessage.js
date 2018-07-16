import React, { Component } from 'react';

export default class SendNewMessage extends Component 
{
	render()
	{
		return (
			<section className="new-message">
				<form>
					<input autoComplete="off" type="text" placeholder="send new message" name="newroom" required />
					<input type="submit" value="send"/>
				</form>
			</section>
			)
	}
}

