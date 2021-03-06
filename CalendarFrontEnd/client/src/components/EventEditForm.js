import React, {Component} from 'react'
import api from '../services/apiServices'
import time from '../services/timeServices'
import {Link, Redirect} from 'react-router-dom'

class EventEditForm extends Component {
	constructor() {
		super()
		this.state = {
			start_time: '',
			end_time: '',
			description: '',
			apiDataLoaded: false,
			fireRedirect: false
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	componentDidMount() {
		api.getOneEvent(this.props.match.params.id).then(event => {
			let start_time = time.convert24to12(event.data.data.start_time)
			let end_time = time.convert24to12(event.data.data.end_time)
			this.setState({
				apiDataLoaded: true,
				start_time: start_time,
				end_time: end_time,
				description: event.data.data.description
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		api.updateEvent(this.state,this.props.match.params.id).then(event => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	handleInputChange(e) {
		let name = e.target.name
		let value = e.target.value
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div className='event-edit'>
				<Link to='/'>{`<< Back to Calendar`}</Link>
				<hr />
				<form onSubmit={this.handleFormSubmit}>
					<input type='text' onChange={this.handleInputChange} name='start_time' value={this.state.start_time} />
					to 
					<input type='text' onChange={this.handleInputChange} name='end_time' value={this.state.end_time} /><br />
					<textarea onChange={this.handleInputChange} name='description' value={this.state.description}></textarea>
					<input type='submit' value='Submit Edits' />
				</form>
				{this.state.fireRedirect ? <Redirect to={`/event/${this.props.match.params.id}`} /> : ''}
			</div>
		)
	}
}

export default EventEditForm
