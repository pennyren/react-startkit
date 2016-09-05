import React from 'react';
import style from './style.css';

class TextField extends React.Component {
	checkDirty(e) {
		const len = e.currentTarget.value.length;
		len ? this.container.classList.add('is-dirty') : this.container.classList.remove('is-dirty');
		
		

	}
	render() {
		return (
			<div className="textfield" ref={r => this.container = r}>
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