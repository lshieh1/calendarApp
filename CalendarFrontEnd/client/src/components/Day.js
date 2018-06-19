import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../services/apiServices'

import EventInDay from './EventInDay'

class Day extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apiDataLoaded: false,
			apiData: null,
		}
	}

	componentDidMount() {
		api.getDayEvents(this.props.day).then(events => {
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
			return <EventInDay key={el.id} event={el} />
		})
	}

	render() {
		return (
			<div className='day-event-list-calendar'>
				<Link to={`/day/${this.props.day}`}>{this.props.day}</Link><br/>
				<Link to={`/day/${this.props.day}/new`}>+add</Link>
				{this.state.apiDataLoaded ? this.renderEvents() : ''}

			</div>
		)
	}
}

export default Day