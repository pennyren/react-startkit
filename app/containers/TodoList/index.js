import React from 'react';
import Todo from '../../Components/Todo';

function TodoList(props) {
	const {todos, onClick} = props;
	let items = todos.map((todo, index) => <Todo {...todo} key={index} index={index} onClick={onClick}/>)
	return (
		<ul>
			{items}
		</ul>
	)
}

export default TodoList;