import React from 'react';
import style from './style.css';

function Footer(props) {
	let filters = ['All', 'Completed', 'Active'];
	return (
		<p>
			Show:
			{filters.map((item, index) => <a href="#" key={index} onClick={props.filterTodos}>{item}</a>)}
		</p>
	)
}

export default Footer;