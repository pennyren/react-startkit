import React from 'react';
import style from './style.css'

function Todo(props) {
	return (<li className={props.completed ? 'completed' : ''} onClick={props.onClick}>{props.text}</li>);
}

export default Todo;