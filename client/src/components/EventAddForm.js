import React, {Component} from 'react'
import api from '../services/apiServices'
import {Link, Redirect} from 'react-router-dom'

class EventAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			start_time: '',
			end_time: '',
			description: '',
			day: 0,
			fireRedirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		this.setState({
			day: this.props.match.params.day
		})
	}

	handleInputChange(e) {
		let name = e.target.name
		let value = e.target.value
		this.setState({
			[name]: value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		api.createEvent(this.state).then(event => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('welp',err)
		})
	}

	render() {
		return (
			<div className='add-form'>
				<Link to='/'>{`<< Back to Calendar`}</Link>
				<hr />
				<form onSubmit={this.handleFormSubmit}>
					<input type='text' name='start_time' onChange={this.handleInputChange} placeholder='Start Time (ex: 01:00PM)' />
					<input type='text' name='end_time' onChange={this.handleInputChange} placeholder='End Time (ex: 03:00PM)' />
					<input type='text' name='description' onChange={this.handleInputChange} placeholder='Description' />
					<input type='submit' value='Submit' />
				</form>
				{this.state.fireRedirect ? <Redirect to='/' /> : ''} 
			</div>
		)
	}
}

export default EventAddForm