export function roomList(state = [],action)
{
	switch (action.type)
	{
		case 'ROOM_LIST':
		return [...state,...action.room];
		default:
		return state;
	}
}