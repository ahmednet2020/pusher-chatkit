//changeRoom
export function changeRoom(roomId,name)
{
	return {
		type: 'CHANGE_ROOM',
		roomId,
		name
	}
} 