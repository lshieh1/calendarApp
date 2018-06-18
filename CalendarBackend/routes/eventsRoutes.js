const express = require('express')
const eventsController = require('../controllers/eventsController')

const eventRoutes = express.Router()

eventRoutes.route('/')
	.get(eventsController.showAllEvents)
	.post(eventsController.createEvent)

eventRoutes.route('/:id')
	.get(eventsController.showOneEvent)
	.put(eventsController.updateEvent)
	.delete(eventsController.deleteEvent)

eventRoutes.get('/:id',)

eventRoutes.get('/days/:day',eventsController.showDayEvents)

module.exports = eventRoutes