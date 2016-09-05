import React from 'react';
import TextField from '../TextField';
import Button from '../Button';

import {addTodo} from '../../containers/TodoList/actions'
import store from '../../store'
import style from './style.css';

class AddTodo extends React.Component {
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
	}
	addTodo() {
		const input = this.textField.input;
		const val = input.value;
		console.log(val);
		input.value = '';
		/*const text = input.value;
		if (text == '') {
			return;
		}
		input.value = '';
		store.dispatch(addTodo(text));*/
	}
	render() {
		return (
			<div className="add">
				<TextField name="Todo" placeholder="Todo..." ref={r => this.textField = r}/>
				<Button onClick={this.addTodo} name="Add"/>
				
			</div>
		);
	}
}

export default AddTodo;