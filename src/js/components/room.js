import React from 'react';

export default function Room({active,roomActive,roomlist})
{
	return (
		<li className={active}>
			<button type="button" className="btn-room" 
			onClick={()=>roomActive(roomlist.id)}>{roomlist.name}</button>
		</li>
		)
}