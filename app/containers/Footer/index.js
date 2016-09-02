import React from 'react';
import {connect} from 'react-redux';

import {filterTodos} from './actions';
import store from '../../store';

import style from './style.css';


class Footer extends React.Component {
	_filterTodos(e) {
		const name = e.currentTarget.textContent;
		store.dispatch(filterTodos(name));
	}
	render() {
		const show = ['All', 'Completed', 'Active'];
		const activeIndex = show.indexOf(this.props.filter);
		let content = show.map((name, index) => {
			if (index == activeIndex) {
				return <a href="#" key={index} className="active" onClick={this._filterTodos}>{name}</a>;
			} else {
				return <a href="#" key={index} onClick={this._filterTodos}>{name}</a>
			}
		});
		
		return (
			<p>Show: {content}</p>
		)
	}
	
}

const mapStateToProps = function(store) {
	return {
		filter: store.filter
	}
}

export default connect(mapStateToProps)(Footer);