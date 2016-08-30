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
		this.deleteItem = this.deleteItem.bind(this);
		this.statusChange = this.statusChange.bind(this);
	}
	addToList(text) {
		let todo = {text: text, completed: false};
		let copyTodos = Object.assign({}, this.state);
		copyTodos.todos.push(todo);
		this.setState(copyTodos);
	}
	onFilterChange(status) {
		let copyTodos = Object.assign({}, this.state);
		copyTodos.status = status;
		this.setState(copyTodos);
	}
	deleteItem(e) {
		e.stopPropagation();
		const index = e.currentTarget.parentNode.getAttribute('data-index');
		let copyTodos = Object.assign({}, this.state);
		copyTodos.todos.splice(index, 1);
		this.setState(copyTodos);
	}
	statusChange(e) {
		const index = e.currentTarget.getAttribute('data-index');
		let copyTodos = Object.assign({}, this.state);
		let item = copyTodos.todos[index];
		item.completed = !item.completed;
		this.setState(copyTodos);
	}
	render() {
		let curTodos = this.state.todos;
		let status = this.state.status;

		if (status == 'completed' || status == 'active') {
			curTodos = curTodos.filter((todo) => {
				if (status == 'completed') {
					return todo.completed;
				} else {

					return !todo.completed;
				}
			});
		}
		
		return (
			<div className="wrap">
				<AddTodo addToList={this.addToList}/>
				<TodoList todos={curTodos} deleteItem={this.deleteItem} statusChange={this.statusChange}/>
				<Footer onFilterChange={this.onFilterChange} />
			</div>
		);
	}
}

export default App;