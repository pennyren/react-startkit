import React from 'react';
import Todo from '../Todo';

function TodoList(props) {
	return (
		<ul>
			{props.todos.map((todo, index) => <Todo {...todo} key={index}/>)}
		</ul>
	)
}

export default TodoList;