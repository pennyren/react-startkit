import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './constants';

const initialState = [{text: 'Use Redux', completed: true}, {text: 'Learn to connect it to React', completed: false}];

const todosReducer = function(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {text: action.text, completed: false}];
		case DEL_TODO:
			let delState = [...state];
			delState.splice(action.index, 1);
			return delState;
		case TOGGLE_TODO:
			let toggleState = [...state];
			const index = action.index;
			let todo = toggleState[index];
			todo.completed = !todo.completed;
			return toggleState;
		default:
			return state;
	}
}

export default todosReducer;