import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider, connect  } from 'react-redux';
import store from './store';
import { messageList, changeRoom }from './action/messageList';
import { roomList }from './action/roomList';
//import compponents
import Toggel from './components/toggel';
import MessageList from './components/messageList';
import RoomList from './components/roomList';
import NewRoom from './components/newRoom';
import SendNewMessage from './components/sendNewMessage';
//chat app script
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import {tokenUrl, instanceLocator} from './apiKey';
//app class

class App extends React.Component
{
	constructor(props) {
        super(props);
        this.state = {roomId:0};
        this.currentUser = '';
        this.sendMessage = this.sendMessage.bind(this);
        this.roomActive = this.roomActive.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    } 
	subscribeToRoom(roomId)
	{
		this.currentUser.subscribeToRoom({
			roomId,
            hooks: {
                onNewMessage: message => {
                    this.props.dispatch(messageList(message))
                }
            }
		});
	}
	roomActive(roomId)
	{
		let cencel = this.currentUser.roomSubscriptions[this.state.roomId];
		if(cencel)
		{
			cencel.cancel();
		}
		this.setState({roomId});
		this.subscribeToRoom(roomId);
		this.props.dispatch(changeRoom(roomId));
	}
	roomList()
	{
		let room = this.currentUser.rooms;
		this.props.dispatch(roomList(room))
	}
	chatManager()
	{
		const chatManager = new ChatManager({
		  instanceLocator,
		  userId: 'admin',
		  tokenProvider: new TokenProvider({ url: tokenUrl })
		});
		chatManager.connect()
		.then(currentUser => {
			this.currentUser = currentUser;
			this.roomList();
		})
		.catch(error => {console.log(error)})

	}
	sendMessage(text)
	{
		this.currentUser.sendMessage({
		  text,
		  roomId:this.state.roomId,
		});
	}
	render()
	{
		return (
			<main className="content">
				<RoomList roomActive={this.roomActive}/>
				<NewRoom/>
				<MessageList/>
				<SendNewMessage sendMessage={this.sendMessage}/>
			</main>
		)
	}
	componentDidMount()
	{
		this.chatManager();
	}
}
const Index = connect()(App);
//render jsx
ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>, document.getElementById('app'));