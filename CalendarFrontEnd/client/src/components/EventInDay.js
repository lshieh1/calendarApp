import React from 'react'
import {Link} from 'react-router-dom'
import time from '../services/timeServices'

const EventInDay = (props) => {
	return (
		<div>
			<Link className='event-in-calendar' to={`/event/${props.event.id}`}>{time.convert24to12(props.event.start_time)} - {time.convert24to12(props.event.end_time)}</Link>
			<br />
		</div>
	)
}

export default EventInDay