import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './constants';
/*import Immutable from 'immutable';*/

const initState = [{text: 'Use Redux', completed: true}, {text: 'Learn to connect it to React', completed: false}];

function todosReducer(state = initState, action) {
	console.log(state)
	switch (action.type) {
		case ADD_TODO:
			return [
        		...state,
        		{
         			text: action.text,
          			completed: false
        		}
      		]
		case DEL_TODO:
			return state.concat().splice(action.index, 1)
		case TOGGLE_TODO:
			return state.map((todo, index) => {
        			if (index === action.index) {
	          			return Object.assign({}, todo, {
	            			completed: !todo.completed
	          			})
        			}
       				return todo
      		})
		default:
			return state
	}
}

export default todosReducer;