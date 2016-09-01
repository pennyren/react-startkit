import React from 'react';
import style from './style.css'

function Todo(props) {
	let className = props.completed ? 'completed' : '';

	return (
		<li className={className} onClick={props.onClick.changeStatus} data-index={props.index}>
			<span className="item">{props.text}</span>
			<span className="delete" onClick={props.onClick.delTodo}>x</span>
		</li>
	);
}

export default Todo;