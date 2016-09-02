import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../TodoList';
import Footer from '../Footer';

import {addTodo} from '../TodoList/actions'
import store from '../../store'

import style from './style.css';

class App extends React.Component {
	_addTodo(e, input) {
		const text = input.value;
		if (text == '') {
			return;
		}
		input.value = '';
		store.dispatch(addTodo(text));
	}
	render() {
		return (
			<div className="wrap">
				<AddTodo addTodo={this._addTodo.bind(this)}/>
				<TodoList />
				<Footer />
			</div>
		)
	}
}

export default App;