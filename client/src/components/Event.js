import React from 'react'
import time from '../services/timeServices'

const Event = (props) => {
	return (
		<div className='event'>
			<hr />
			{props.isEventList ? <h2>June {props.event.day}, 2018</h2> : ''}
			<h3>{time.convert24to12(props.event.start_time)} to {time.convert24to12(props.event.end_time)}</h3>
			<p>{props.event.description}</p>
			<hr />
		</div>
	)
}

export default Event