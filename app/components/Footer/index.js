import React, {Component} from 'react';
import style from './style.css';

class Footer extends Component {
	render() {
		let filters = [{filter: 'all', name: 'All'}, {filter: 'completed', name: 'Completed'}, {filter: 'active', name: 'Active'}]
		return (
			<p>
				Show: 
				{filters.map((filter, index) => <a href="#" onClick={this.props.onFilterChange} key={index} data-filter={filter.filter}>{filter.name}</a>)}
			</p>
		)
	}
}

export default Footer;