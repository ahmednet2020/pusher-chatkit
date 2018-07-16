import React, { Component } from 'react';
//import component
import Message from './message';

export default class MessageList extends Component 
{
	render()
	{
		return (
			<section className="message-list">
				<Message text="welcome"/>
			</section>
			)
	}
}

