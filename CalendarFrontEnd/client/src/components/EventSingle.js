import React, {Component} from 'react'
import api from '../services/apiServices'
import {Link,Redirect} from 'react-router-dom'

class EventSingle extends Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			fireDeleteRedirect: false,
			fireEditRedirect: false
		}
		this.deleteEvent = this.deleteEvent.bind(this)
		this.editButtonEvent = this.editButtonEvent.bind(this)
	}

	componentDidMount() {
		api.getOneEvent(this.props.match.params.id).then(event => {
			this.setState({
				apiDataLoaded: true,
				apiData: event.data.data
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	deleteEvent() {
		api.deleteEvent(this.props.match.params.id).then(event => {
			this.setState({
				fireDeleteRedirect: true
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	editButtonEvent() {
		this.setState({
			fireEditRedirect: true
		})
	}

	renderEvent() {
		return (
			<div className='event-single'>
				<Link to='/'>{`<< Back to Calendar`}</Link>
				<h2>June {this.state.apiData.day}, 2018</h2>
				<h3>Time: {this.state.apiData.start_time} to {this.state.apiData.end_time}</h3>
				<p>Description: {this.state.apiData.description}</p>
				<button onClick={this.deleteEvent}>Delete</button>
				<button onClick={this.editButtonEvent}>Edit Event</button>
			</div>
		)
	}

	render() {
		return (
			<div className='event'>
				{this.state.apiDataLoaded ? this.renderEvent() : 'Loading...'}
				{this.state.fireDeleteRedirect ? <Redirect to='/' /> : ''}
				{this.state.fireEditRedirect ? <Redirect to={`/event/${this.state.apiData.id}/edit`} /> : ''}
			</div>
		)
	}
}

export default EventSingle