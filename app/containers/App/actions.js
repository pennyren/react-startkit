import FILTER_TODOS from './constants';

export function filterTodos(filter) {
	return {
		type: FILTER_TODOS,
		filter
	}
}