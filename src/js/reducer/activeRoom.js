//activeRoom reducer when user change room or select room
//and just return the active room id api
export function activeRoom(state = 0, action)
{
	switch (action.type)
	{
		case 'CHANGE_ROOM':
		return {id:action.roomId,name:action.name};
		default:
		return state;
	}
}