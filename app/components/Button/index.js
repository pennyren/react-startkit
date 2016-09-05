import React from 'react';
import Ripple from '../Ripple';
import style from './style.css';

function Button(props) {
	return (
		<button className="btn" onClick={props.onClick}>
			{props.name}
			<Ripple />
		</button>
	)
}

export default Button;