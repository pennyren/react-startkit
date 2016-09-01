import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './constants'

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}
export function delTodo(index) {
	return {
		type: DEL_TODO,
		index
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}