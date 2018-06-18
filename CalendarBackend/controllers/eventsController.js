const eventsDB = require('../models/eventsDB')

module.exports = {

	showAllEvents(req,res) {
		eventsDB.showAllEvents().then(events => {
			res.json({
				message: 'ok',
				data: events
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	},

	showOneEvent(req,res) {
		eventsDB.showOneEvent(req.params.id).then(event => {
			res.json({
				message: 'ok',
				data: event
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	},

	createEvent(req,res) {
		eventsDB.createEvent(req.body).then(event => {
			res.json({
				message: 'ok',
				data: event
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	},

	showDayEvents(req,res) {
		eventsDB.showDayEvents(req.params.day).then(events => {
			res.json({
				message: 'ok',
				data: events
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	},

	updateEvent(res,req) {
		eventsDB.updateEvent(req.body).then(event => {
			res.json({
				message: 'ok',
				data: event
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	},

	deleteEvent(req,res) {
		eventsDB.deleteEvent(req.params.id).then(() => {
			res.json({
				message: 'ok'
			})
		}).catch(err => {
			res.status(400).json({
				message: '400',
				error: err
			})
		}) 
	}
}