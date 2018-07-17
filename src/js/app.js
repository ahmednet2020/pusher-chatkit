import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider, connect  } from 'react-redux';
import store from './store';
import { messageList }from './action/messageList';
//import compponents
import Toggel from './components/toggel';
import MessageList from './components/messageList';
import RoomList from './components/roomList';
import NewRoom from './components/newRoom';
import SendNewMessage from './components/sendNewMessage';
//chat app script
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import {tokenUrl, instanceLocator, secretKey} from './apiKey';
//app class

class App extends React.Component
{
	render()
	{
		return (
			<main className="content">
				<RoomList/>
				<NewRoom/>
				<MessageList/>
				<SendNewMessage/>
			</main>
		)
	}
	componentDidMount()
	{
		const chatManager = new ChatManager({
		  instanceLocator,
		  userId: 'admin',
		  tokenProvider: new TokenProvider({ url: tokenUrl })
		});
		chatManager.connect()
		.then(currentUser => {
			currentUser.subscribeToRoom({
				roomId: 11835113,
	            hooks: {
	                onNewMessage: message => {
	                    this.props.dispatch(messageList(message))
	                }
	            }
			});
		})
		.catch(error => {console.log(error)})
	}
}
const Index = connect()(App);
//render jsx
ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('app'));