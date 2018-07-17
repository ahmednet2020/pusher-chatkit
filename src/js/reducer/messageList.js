export function messageList(state = [], action)
{
	switch (action.type)
	{
		case 'MESSAGE_LIST':
		return [...state,action.message];
		case 'CHANGE_ROOM':
		return [];
		default:
		return state;
	}
}

export function activeRoom(state = '', action)
{
	switch (action.type)
	{
		case 'CHANGE_ROOM':
		return action.roomId;
		default:
		return state;
	}
}