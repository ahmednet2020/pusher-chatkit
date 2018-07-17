import { createStore, compose } from 'redux';
import rootReducer from './reducer/rootReducer'
//this code for devtool extension for test only
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer,devTool);
store.subscribe(()=> {
	//console.log(store.getState());
})
window.store = store;
export default store;