//messageList reducer to fetch old message from api server 
//and get new message from the api server
//just return array in object with roomid key of this object
export function messageList(state = {}, action)
{
	switch (action.type)
	{
		case 'MESSAGE_LIST':
		return Object.assign({},state,newMassage(state,action));  
		case 'CHANGE_ROOM':
		return {};
		default:
		return state;
	}
}
//function to handel if they oldMeassage in room 
function newMassage(state,action) {
	let oldMassage = state[action.message.roomId] ? state[action.message.roomId]:[];
	let newMassage = {};
		oldMassage.push(action.message);
		newMassage[action.message.roomId] = oldMassage;
	return newMassage;
}