import React, {Component} from 'react';
import style from './style.css';

class Footer extends Component {
	constructor() {
		super();
		this.changeStatus = this.changeStatus.bind(this);
	}
	changeStatus(e) {
		const status = e.target.getAttribute('data-filter');
		this.props.onFilterChange(status);
	}
	render() {
		let filters = [{filter: 'all', name: 'All'}, {filter: 'completed', name: 'Completed'}, {filter: 'active', name: 'Active'}]
		return (
			<p>
				Show: 
				{filters.map((filter, index) => <a href="#" onClick={this.changeStatus} key={index} data-filter={filter.filter}>{filter.name}</a>)}
			</p>
		)
	}
}

export default Footer;