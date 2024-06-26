const express = require('express')

const logsController = require('./controllers/logsController')
const v2logsCOntroller = require('../v2/controllers/logsController')
const app = express()

app.use(express.json())

app.use('/logs', logsController)
app.use('/v2/logs', v2logsCOntroller)

app.get('/', (req, res) => {
    res.send(`Welcome to M.O.K.A Captain Logs`)
})

app.get('*', (req, res) => {
    res.status.json({error: `404 Page Not Found`})
})

module.exports = app