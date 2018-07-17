export function messageList(message)
{
	return {
		type: 'MESSAGE_LIST',
		message
	}
} 
export function changeRoom(roomId)
{
	return {
		type: 'CHANGE_ROOM',
		roomId
	}
} 