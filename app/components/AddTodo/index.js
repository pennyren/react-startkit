import React from 'react';
import style from './style.css';

class AddTodo extends React.Component {
	render() {
		return (
			<div>
				<input type='text' ref={ref => this.input = ref}/>
				<button onClick={e => this.props.addTodo(e, this.input)}>Add</button>
			</div>
		);
	}
}

export default AddTodo;