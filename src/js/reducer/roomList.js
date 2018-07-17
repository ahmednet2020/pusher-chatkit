//roomList reducer to fetch roomlist from api server 
//just return array with list of room
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