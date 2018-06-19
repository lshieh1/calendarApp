import React from 'react'
import {Link} from 'react-router-dom'

const EventInDay = (props) => {
	return (
		<div>
			<Link className='event-in-calendar' to={`/event/${props.event.id}`}>{props.event.start_time} - {props.event.end_time}</Link>
			<br />
		</div>
	)
}

export default EventInDay