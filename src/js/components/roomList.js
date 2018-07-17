import React, { Component } from 'react';
//redux
import { connect  } from 'react-redux';
//import component
import Room from './room';

class RoomList extends Component 
{
	render()
	{
		return (
		<section className="room-list">
			<h2 className="room-title">your rooms:</h2>
			<ul className="room">
			{
				this.props.roomList.map(room => {
					let activeRoom = (room.id === this.props.activeRoom.id ? 'active':'');
					return (<Room 
					key={room.id} 
					roomActive={this.props.roomActive}
					roomlist={room}
					active={activeRoom}
					/>)
				})
			}
			</ul>
		</section>
			)
	}
}
const mapStateToProps = state => ({
  roomList: state.roomList,
  activeRoom:state.activeRoom
});
export default connect(mapStateToProps)(RoomList);

