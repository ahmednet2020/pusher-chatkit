import React from 'react';
//function return jsx element
export default function Message({id,text})
{
	return (
		<div className="message">
			<h4 className="user-id">{id}</h4>
			<p className="user-txt">{text}</p>
		</div>)
}