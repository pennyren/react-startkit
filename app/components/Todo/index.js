import React from 'react';
import style from './style.css'


function Todo(props) {
	const text = <span className="item">{props.text}</span>;
	const icon = <span className="delete" onClick={props.delTodo}>x</span>;
	if (props.completed) {
		return <li className="completed" data-index={props.index} onClick={props.toggleTodo}>{text}{icon}</li>;
	} else {
		return <li data-index={props.index} onClick={props.toggleTodo}>{text}{icon}</li>;
	}
}

export default Todo;