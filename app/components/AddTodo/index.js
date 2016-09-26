import React from 'react';
import TextField from '../TextField';
import Button from '../Button';

import {addTodo} from 'containers/TodoList/actions';
import store from 'store';
import style from './style.css';

class AddTodo extends React.Component {
	addTodo = () => {
		const input = this.textfield.input;
		const text = input.value;
		if (text == '') {
			return;
		}
		input.value = '';

		this.textfield.view.classList.remove('is-dirty');	
		store.dispatch(addTodo(text));
	}
	render() {
		return (
			<div className="add">
				<TextField name="Todo" placeholder="Todo..." ref={r => this.textfield = r}/>
				<Button onClick={this.addTodo} name="Add"/>
			</div>
		);
	}
}

export default AddTodo;