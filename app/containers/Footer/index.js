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
			let props = {
				href: '#',
				key: index,
				onClick: this._filterTodos
			}
			if (index == activeIndex) {
				props.className = 'Active';
			}
		
			return <a {...props}>{name}</a>;
		});
		
		return (
			<p className="filter">Show: {content}</p>
		)
	}
	
}

const mapStateToProps = function(store) {
	return {
		filter: store.filter
	}
}

export default connect(mapStateToProps)(Footer);