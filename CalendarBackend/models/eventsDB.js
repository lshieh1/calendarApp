const db = require('../db/config')

module.exports = {

	showAllEvents() {
		return db.many('SELECT * FROM events ORDER BY day')
	},

	showOneEvent(id) {
		return db.one(`SELECT * FROM events WHERE id=$1`,id)
	},

	createEvent(event) {
		return db.one(`INSERT INTO events (start_time,end_time,description,day) 
			VALUES ($[start_time],$[end_time],$[description],$[day]) RETURNING *`)
	},

	showDayEvents(day) {
		return db.many(`SELECT * FROM events WHERE day=$1`,day)
	},

	updateEvent(event) {
		return db.one(`UPDATE events SET start_time=$[start_time], end_time=$[end_time], description=$[description], day=$[day]
			WHERE is=$[id] RETURNING *`,event)
	},

	deleteEvent(id) {
		return db.none(`DELETE FROM events WHERE id=$1`,id)
	}
}