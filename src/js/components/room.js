import React from 'react';

export default function Room({roomlist})
{
	return (
		<ul className="room">
		{
			roomlist.map(
				(room,i)=><li key={i}>{room}</li>
				)
		}
		</ul>
		)
}