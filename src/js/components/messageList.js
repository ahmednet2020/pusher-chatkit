import React, { Component } from 'react';
//redux
import { connect  } from 'react-redux';
//import component
import Message from './message';

class MessageList extends Component 
{
	render()
	{
		return (
			<section className="message-list">
				{
					this.props.messageList.map(m =>{
						return <Message key={m.id} id={m.senderId} text={m.text}/>
					})
				}
			</section>
			)
	}
	componentDidMount()
	{
		
	}
}

const mapStateToProps = state => ({
  messageList: state.messageList
})
export default connect(mapStateToProps)(MessageList);

