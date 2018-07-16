import React from 'react';

export default function Message({id,text})
{
	return (
		<div className="message">
			<span className="user-id h-style">{id}</span>
			<p className="user-txt">{text}</p>
		</div>)
}