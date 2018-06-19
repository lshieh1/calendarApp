import React from 'react'

const Event = (props) => {
	return (
		<div className='event'>
			<hr />
			<h2>June {props.event.day}, 2018</h2>
			<h3>{props.event.start_time} to {props.event.end_time}</h3>
			<p>{props.event.description}</p>
			<hr />
		</div>
	)
}

export default Event