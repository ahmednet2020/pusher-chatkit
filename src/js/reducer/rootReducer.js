//redux
import { combineReducers } from 'redux';
//import Reducers
import { messageList} from './messageList';
import { activeRoom} from './activeRoom';
import { roomList} from './roomList';


//create redux Reducer root to get all Reducers in one Reducer
const rootReducer = combineReducers({
	messageList,
	roomList,
	activeRoom
});
export default rootReducer;