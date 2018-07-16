import { combineReducers } from 'redux';


function hello(state = '' ,action)
{
	switch (action.type)
	{
		case 'hello':
		return 'hello';
		default:
		return state;
	}
}
function bye(state = '' ,action)
{
	switch (action.type)
	{
		case 'bye':
		return 'bye';
		default:
		return state;
	}
}
const rootReducer = combineReducers({
	hello,
	bye
});
export default rootReducer;