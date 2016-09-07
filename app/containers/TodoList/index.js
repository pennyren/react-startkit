import React from 'react';
import {connect} from 'react-redux';
import Todo from 'components/Todo';

import {delTodo, toggleTodo} from './actions';
import store from 'store';

import style from './style.css';

class TodoList extends React.Component {
	_delTodo(e) {
		e.stopPropagation();
		const index = e.currentTarget.parentNode.getAttribute('data-index');
		store.dispatch(delTodo(+index));
	}
	_toggleTodo(e) {
		const index = e.currentTarget.parentNode.getAttribute('data-index');
		store.dispatch(toggleTodo(+index));
	}
	render() {
		let todos = this.props.todos;
		let items = todos.map((todo, index) => {
			return <Todo {...todo} key={index} index={index} delTodo={this._delTodo} toggleTodo={this._toggleTodo} />
		})
		
		return (
			<ul className="list">
				{items}
			</ul>
		)
	}
}

const selector = function(store) {
	const filter = store.filter;
	let todos = store.todos;
	switch (filter) {
		case 'Completed':
			return todos.filter(todo => todo.completed);
		case 'Active':
			return todos.filter(todo => !todo.completed);
		default:
			return todos;
	}
}

const mapStateToPorps = function(store) {
	return {
		todos: selector(store)
	}
}

export default connect(mapStateToPorps)(TodoList);