import React, {Component} from 'react'
import api from '../services/apiServices'

import Event from './Event'

class DayEventList extends Component {
	contructor() {
		super()
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
				{this.state.apiDateLoaded ? this.renderEvents() : 'Loading...'}
			</div>
		)
	}
}