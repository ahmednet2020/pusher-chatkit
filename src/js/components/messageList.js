import React, { Component } from 'react';
//import component
import Message from './message';

export default class MessageList extends Component 
{
	render()
	{
		return (
			<section className="message-list">
				<Message id="ahmed" text="hello"/>
				<Message id="samir" text="hi"/>
				<Message id="ali" text="hello guys"/>
			</section>
			)
	}
}

