import React from 'react';
import style from './style.css';

class TextField extends React.Component {
	checkDirty(e) {
		e.currentTarget.value.length ? this.view.classList.add('is-dirty') : this.view.classList.remove('is-dirty');
	}
	render() {
		return (
			<div className="textfield" ref={v => this.view = v}>
				<input className="textfield-input" 
					   type="text" 
					   id={this.props.name} 
				       onInput={this.checkDirty.bind(this)}
					   ref={r => this.input = r}/>
				<label className="textfield-label" htmlFor={this.props.name}>{this.props.placeholder}</label>
			</div>
		)
	}
}

export default TextField;