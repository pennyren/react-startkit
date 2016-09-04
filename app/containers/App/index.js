import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../TodoList';
import Footer from '../Footer';

import style from './style.css';

function App() {
	

	return (
		<div className="todos">
			<AddTodo/>
			<TodoList />
			<Footer />
		</div>
	)

}

export default App;