import FILTER_TODOS from './constants';

const initState = 'All';

function filterReducer(state = initState, action) {
	switch (action.type) {
		case FILTER_TODOS:
			return action.filter
		default:
			return state
	}
}

export default filterReducer;