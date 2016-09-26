import {createStore} from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());

export default store;