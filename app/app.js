import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import {addTodo, toggleTodo} from './containers/TodoList/actions'
console.log(store.getState());
store.subscribe(() => 
	console.log(store.getState())
)
store.dispatch(addTodo('hhhhh'))
store.dispatch(toggleTodo(1))


/*import App from './containers/App';*/

/*ReactDOM.render(<App />, document.getElementById('app'));*/