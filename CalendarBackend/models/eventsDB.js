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
			VALUES ($[start_time],$[end_time],$[description],$[day]) RETURNING *`,event)
	},

	showDayEvents(day) {
		return db.many(`SELECT * FROM events WHERE day=$1 ORDER BY start_time`,day)
	},

	updateEvent(event,id) {
		return db.one(`UPDATE events SET start_time=$1, end_time=$2, description=$3 
			WHERE id=$4 RETURNING *`,[event.start_time,event.end_time,event.description,id])
	},

	deleteEvent(id) {
		return db.none(`DELETE FROM events WHERE id=$1`,id)
	}
}