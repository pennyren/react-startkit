import React from 'react';
import style from './style.css';

function Button(props) {
	return (
		<button className="btn" onClick={props.onClick}>{props.name}</button>
	)
}

export default Button;