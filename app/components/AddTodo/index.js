import React from 'react';
import style from './style.css';

function AddTodo(props) {
	return (
		<div>
			<input type='text'/>
			<button onClick={props.onClick}>Add</button>
		</div>
	);
}

export default AddTodo;