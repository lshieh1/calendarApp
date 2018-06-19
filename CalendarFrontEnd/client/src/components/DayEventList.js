import React, {Component} from 'react'
import api from '../services/apiServices'
import {Link} from 'react-router-dom'

import Event from './Event'

class DayEventList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apiDataLoaded: false,
			apiData: null
		}
	}

	componentDidMount() {
		api.getDayEvents(this.props.match.params.day).then(events => {
			this.setState({
				apiDataLoaded: true,
				apiData: events.data.data
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	renderEvents() {
		return this.state.apiData.map((el,i) => {
			return <Event key={el.id} event={el} />
		})
	}

	render() {
		return (
			<div className='day-event-list'>
				<Link to='/'>{`<< Back to Calendar`}</Link>
				<h2>June {this.props.match.params.day}, 2018</h2>
				<br />
				{this.state.apiDataLoaded ? this.renderEvents() : 'Nothing scheduled...'}
				<br />
			</div>
		)
	}
}

export default DayEventList