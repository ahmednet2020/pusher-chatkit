import { combineReducers } from 'redux';
import { messageList, activeRoom} from './messageList';
import { roomList} from './roomList';
const rootReducer = combineReducers({
	messageList,
	roomList,
	activeRoom
});
export default rootReducer;