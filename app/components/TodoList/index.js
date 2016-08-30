import React from 'react';
import Todo from '../Todo';

function TodoList(props) {
	const {todos, ...others} = props;
	return (
		<ul>
			{todos.map((todo, index) => <Todo {...todo} key={index} index={index} {...others}/>)}
		</ul>
	)
}

export default TodoList;