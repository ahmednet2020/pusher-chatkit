import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
//redux
import { connect  } from 'react-redux';
//import component
import Message from './message';

class MessageList extends Component 
{
	//jsx function
	render()
	{
		if(!this.props.activeRoom.id)
		{
			return (
				<section className="message-list">
					<h2 className="message-title"> &larr; Join a room!</h2>
				</section>
				);
		}
		return (
			<section className="message-list">
			<h2 className="message-title">room name: {this.props.activeRoom.name}</h2>
				{
					this.props.messageList[this.props.activeRoom.id] &&
					this.props.messageList[this.props.activeRoom.id].map(m =>{
						return <Message key={m.id} id={m.senderId} text={m.text}/>
					})
				}
			</section>
			)
	}
	componentWillUpdate() {
		const list = findDOMNode(this);
		//no auto scroll when read old massega
        this.shouldScrollToBottom = list.scrollTop + list.clientHeight + 50 >= list.scrollHeight;
    }
	componentDidUpdate()
	{
		const list = findDOMNode(this);
		//to fixed scroll in last message
		//auto scroll
		if(this.shouldScrollToBottom) list.scrollTop = list.scrollHeight;
	}
}

const mapStateToProps = state => ({
  messageList: state.messageList,
  activeRoom:state.activeRoom
})
export default connect(mapStateToProps)(MessageList);

