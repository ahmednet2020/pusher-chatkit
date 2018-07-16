import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import compponents
import Toggel from './components/toggel';
import MessageList from './components/messageList';
import RoomList from './components/roomList';
import NewRoom from './components/newRoom';
import SendNewMessage from './components/sendNewMessage';
//app class

class App extends React.Component
{
	render()
	{
		return (
			<div>
				<RoomList/>
				<MessageList/>
				<NewRoom/>
				<SendNewMessage/>
			</div>
		)
	}
	componentDidMount()
	{
		let app = ReactDOM.findDOMNode(this);
		console.dir(app);
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));