import React, {Component, PropTypes} from 'react';
import style from './style.css';

//display component
//todo typeing and button

class AddTodo extends Component {
	constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(e) {
    	const todo = this.addTodoInput.value;
    	this.props.addToList(todo);
    	this.addTodoInput.value = '';
    }
	render() {
		return (
			<div>
				<input type='text' ref={(ref) => this.addTodoInput = ref} />
				<button onClick={this.addTodo}>Add</button>
			</div>
		);
	}
}

export default AddTodo;