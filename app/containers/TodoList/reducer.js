import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './constants';
/*import Immutable from 'immutable';*/

const initState = [{text: 'Use Redux', completed: true}, {text: 'Learn to connect it to React', completed: false}];

const todosReducer = function(state = initState, action) {
	const type = action.type;
	if (type == ADD_TODO) {
		return []
	} else if (type == DEL_TODO) {
		return []
	} else if (type == TOGGLE_TODO) {
		return []
	}

	return state;
}


export default todosReducer;