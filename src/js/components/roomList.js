import React, { Component } from 'react';
//import component
import Room from './room';

export default class RoomList extends Component 
{
	render()
	{
		return (
			<section className="room-list">
				<Room roomlist={["room1","room2","room3"]}/>
			</section>
			)
	}
}

