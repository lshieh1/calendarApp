import axios from 'axios'

export default = {

	getAllEvents() {
		return axios.get('/api/events')
	},

	getOneEvent(id) {
		return axios.get(`/api/events/${id}`)
	},

	createEvent(event) {
		return axios({
			method: 'POST',
			url: '/api/events',
			data: {
				start_time: event.start_time,
				end_time: event.end_time,
				description: event.description,
				day: event.day
			}
		})
	},

	updateEvent(event,id) {
		return axios({
			method: 'PUT',
			url: `/api/events/${id}`,
			data: {
				start_time: event.start_time,
				end_time: event.end_time,
				description: event.description,
				day: event.day				
			}
		})
	},

	getDayEvents(day) {
		return axios.get(`/api/events/days/${day}`)
	},

	deleteEvent(id) {
		return axios.delete(`api/events/${id}`)
	}
}