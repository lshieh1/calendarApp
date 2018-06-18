import React, {Component} from 'react'
import api from '../services/apiServices'

class Event extends Component {
	constructor(props) {
		super(props)
		this.state = {
			event_id: props
		}
	}
}