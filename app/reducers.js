import {combineReducers} from 'redux';
import todosReducer from './containers/TodoList/reducer';
import filterReducer from './containers/Footer/reducer';

const todoApp = combineReducers({
	todos: todosReducer,
	filter: filterReducer
})

export default todoApp;