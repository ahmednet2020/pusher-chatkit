import React from 'react';
//jsx function
export default function Room({active,roomActive,roomlist})
{
	return (
		<li className={active}>
			<button type="button" className="btn-room h-style" 
			onClick={()=>roomActive(roomlist.id,roomlist.name)}># {roomlist.name}</button>
		</li>
		)
}