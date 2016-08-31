import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../TodoList';
import Footer from '../../components/Footer';

import Map from ''
import bind from '../../utils/bind'
import style from './style.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{text: 'Use Redux', completed: true}, {text: 'Learn to connect it to React', completed: false}],
			filter: 'All'
		};
		bind(this, [this.addTodo, this.filterTodos, this.changeStatus]);
	}
	addTodo(e) {
		
	}
	
	delTodo(e) {
		e.stopP
		console.log(e.currentTarget);
	}
	changeStatus(e) {
		console.log(e.currentTarget);
	}
	filterTodos(e) {
		
		
	}
	render() {
		let curTodos = this.state.todos;
		let todoHandle = {
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
				<AddTodo addTodo={this.addTodo}/>
				<TodoList todos={curTodos} changeStatus={this.changeStatus} delTodo={this.delTodo}/>
				<Footer filterTodos={this.filterTodos}/>
			</div>
		);
	}
}

export default App;