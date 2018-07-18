import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider, connect  } from 'react-redux';
import store from './store';
//action
import { messageList }from './action/messageList';
import { changeRoom }from './action/changeRoom';
import { roomList }from './action/roomList';
//import compponents
import Toggel from './components/toggel';
import MessageList from './components/messageList';
import RoomList from './components/roomList';
import NewRoom from './components/newRoom';
import SendNewMessage from './components/sendNewMessage';
//chat app script
import {ChatManager, TokenProvider } from '@pusher/chatkit'
import {tokenUrl, instanceLocator} from './apiKey';

//app class
class App extends React.Component
{
	constructor(props) {
        super(props);
        this.state = {roomId:0};
        this.currentUser = '';
        this.sendMessage = this.sendMessage.bind(this);//event sendMessage
        this.roomActive = this.roomActive.bind(this);//event roomActive
        this.sendMessage = this.sendMessage.bind(this);//event sendMessage
        this.newRoom = this.newRoom.bind(this);
    }
    //chatkit api config function to connect with chat
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
    // subscribeToRoom to get message from server api
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
	roomActive(roomId,name)
	{
		//to cencel room Subscription
		//let cencel = (this.state.roomId ? this.currentUser.roomSubscriptions[this.state.roomId].cancel():false);
		this.setState({roomId});
		this.subscribeToRoom(roomId);
		this.props.dispatch(changeRoom(roomId,name));
	}
	//to get room list
	roomList()
	{
		this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
        	let room = [...this.currentUser.rooms,...joinableRooms].sort((a,b) => a.name < b.name);
			this.props.dispatch(roomList(room));
        })
        .catch(err => console.log('error on joinableRooms: ', err))
	}
	//sendMessage event
	sendMessage(text)
	{
		this.currentUser.sendMessage({
		  text,
		  roomId:this.state.roomId,
		})
		.then(messageId => messageId)
		.catch(err => alert("join a room first"));
	}
	//create new Room event
	newRoom(name)
	{
		this.currentUser.createRoom({
            name
        })
        .then(room => {
        	this.roomList();
        	this.roomActive(room.id,room.name);
        })
        .catch(err => console.log('error with createRoom: ', err));
	}
	render()
	{
		return (
			<main className="content">
				<RoomList roomActive={this.roomActive}/>
				<NewRoom newRoom={this.newRoom}/>
				<MessageList/>
				<SendNewMessage sendMessage={this.sendMessage}/>
			</main>
		)
	}
	//fire api when app render
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