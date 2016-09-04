import React from 'react';
import style from './style.css';

class TextField extends React.Component {
	render() {
		return (
			<div className="textfield">
				<input className="textfield-input" type="text" id={this.props.name} ref={r => this.input = r}/>
				<label className="textfield-label" htmlFor={this.props.name}>{this.props.placeholder}</label>
			</div>
		)
	}
}

export default TextField;