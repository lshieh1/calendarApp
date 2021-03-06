import React, {Component} from 'react'
import api from '../services/apiServices'
import {Link} from 'react-router-dom'

import Event from './Event'

class EventList extends Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiDate: null
		}
	}

	componentDidMount() {
		api.getAllEvents().then(events => {
			console.log(events)
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
			return <Event key={el.id} event={el} isEventList={true}/>
		})
	}

	render() {
		return (
			<div className='event-list'>
				<Link to='/'>{`<< Back to Calendar`}</Link>
				{this.state.apiDataLoaded ? this.renderEvents() : 'Loading...'}
			</div>
		)
	}
}

export default EventList