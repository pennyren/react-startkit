import React from 'react';
import style from './style.css'

function Todo(props) {
	let textProps = {
		className: props.completed ? 'content completed' : 'content',
		onClick: props.toggleTodo
	}
	
	return (<li className="item" data-index={props.index}>
				<span {...textProps}>{props.text}</span>
				<i className="mdi mdi-delete" onClick={props.delTodo}></i>
			</li>);
}

export default Todo;