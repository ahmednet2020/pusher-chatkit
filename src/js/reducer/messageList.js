export function messageList(state = [],action)
{
	switch (action.type)
	{
		case 'MESSAGE_LIST':
		return [...state,action.message];
		default:
		return state;
	}
}