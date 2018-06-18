const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
//const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001

const eventsRoutes = require('./routes/eventsRoutes')

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/events',eventsRoutes)

app.use('*',(res,req) => {
	res.status(404).send({message: 'Oops! Not found.'})
})