import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../TodoList';
import Footer from '../../components/Footer';

import Map from ''
import bind from '../../utils/bind'
import style from './style.css';

class App extends React.Component {
	
	render() {
		let curTodos = this.state.todos;
		
		let onClick = {
			changeStatus: this.changeStatus,
			delTodo: this.delTodo
		}
		if (this.state.filter !== 'All') {
			curTodos = curTodos.filter((todo) => {
				return this.state.status == 'Completed' ? todo.completed : !todo.completed;
			});
		}
		
		return (
			<div className="wrap">
				<AddTodo onClick={this.addTodo}/>
				<TodoList todos={curTodos} onClick={onClick}/>
				<Footer onClick={this.filterTodos}/>
			</div>
		);
	}
}

export default App;