import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';
import Footer from '../../components/Footer';
import style from './style.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [{text: 'Use Redux', completed: true}, {text: 'Learn to connect it to React', completed: false}],
			status: 'all'
		};
		this.addToList = this.addToList.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);
	}
	addToList(text) {
		let todo = {text: text, completed: false};
		let copyTodos = Object.assign({}, this.state);
		copyTodos.todos.push(todo);
		this.setState(copyTodos);
	}
	onFilterChange(filter) {

	}
	render() {
		let curTodos = this.state.todos;
		let status = this.state.status;

		if (status == 'completed' || status == 'active') {
			curTodos = curTodos.filter((todo) => {
				if (status == 'completed') return todo.completed == 'true';
					else return todo.completed == 'false';
			});
		}
		
		return (
			<div className="wrap">
				<AddTodo addToList={this.addToList}/>
				<TodoList todos={curTodos} />
				<Footer onFilterChange={this.onFilterChange}/>
			</div>
		);
	}
}

export default App;