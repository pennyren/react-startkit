import React from 'react';
import style from './style.css'

function Todo(props) {
	return (
		<li className={props.completed ? 'completed' : ''} onClick={props.changeStatus} data-index={props.index}>
			<span className="item">{props.text}</span>
			<span className="delete" onClick={props.delTodo}>x</span>
		</li>
	);
}

export default Todo;