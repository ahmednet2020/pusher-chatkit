import React, { Component } from 'react';
//redux
import { connect  } from 'react-redux';
//SendNewMessage class
class SendNewMessage extends Component 
{
	submit(e)
	{
		e.preventDefault();
		const newmessage = e.target.newmessage.value;
		this.props.sendMessage(newmessage);
		e.target.reset();
	}
	render()
	{
		return (
			<section className="new-message">
				<form onSubmit={this.submit.bind(this)}>
					<input disabled={!this.props.activeRoom} autoComplete="off" type="text" placeholder="send new message" name="newmessage" required />
					<input type="submit" value="send"/>
				</form>
			</section>
			)
	}
}

const mapStateToProps = state => ({
  activeRoom:state.activeRoom
})
export default connect(mapStateToProps)(SendNewMessage);
