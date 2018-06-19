import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Day from './Day'

class Calendar extends Component {
	createCalendar() {
		let array = []
		for(let i=1;i<=30;i++) {
			array.push(<div className='grid-item square'><Day day={i} /></div>)
		}
		return array
	}

	render() {
		return (
			<div className='calendar'>
				<h2>JUNE 2018</h2>
				<Link to='/event'>List of All Events</Link><br />
				<div className='grid-container'>
					<div className='grid-item day-of-week'>Sun</div>
					<div className='grid-item day-of-week'>Mon</div>
					<div className='grid-item day-of-week'>Tue</div>
					<div className='grid-item day-of-week'>Wed</div>
					<div className='grid-item day-of-week'>Thu</div>
					<div className='grid-item day-of-week'>Fri</div>
					<div className='grid-item day-of-week'>Sat</div>
					<div className='grid-item square faded'>27</div>
					<div className='grid-item square faded'>28</div>
					<div className='grid-item square faded'>29</div>
					<div className='grid-item square faded'>30</div>
					<div className='grid-item square faded'>31</div>
					{this.createCalendar()}
				</div>
			</div>
		)
	}
}

export default Calendar