import React from 'react';
import {connect} from 'react-redux';
import Todo from '../../Components/Todo';
import {delTodo, toggleTodo} from './actions';
import store from '../../store';

class TodoList extends React.Component {
	_delTodo(e) {
		e.stopPropagation();
		const index = e.currentTarget.parentNode.getAttribute('data-index');
		console.log(index);
		store.dispatch(delTodo(index));
	}
	_toggleTodo(e) {
		const index = e.currentTarget.getAttribute('data-index');
		console.log(index);
		store.dispatch(toggleTodo(index));
		console.log(store.getState())
	}
	render() {
		let todos = this.props.todos;
		let items = todos.map((todo, index) => {
			return <Todo {...todo} key={index} index={index} delTodo={this._delTodo} toggleTodo={this._toggleTodo} />
		})
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

const mapStateToPorps = function(store) {
	return {
		todos: store.todos
	}
}
export default connect(mapStateToPorps)(TodoList);