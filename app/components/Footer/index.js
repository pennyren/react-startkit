import React from 'react';
import style from './style.css';

function Footer(props) {
	let filters = ['All', 'Completed', 'Active'];
	let items = filters.map((filter, index) => <a href="#" key={index} onClick={props.onClick}>{filter}</a>)
	return (
		<p>Show:{items}</p>
	)
}

export default Footer;