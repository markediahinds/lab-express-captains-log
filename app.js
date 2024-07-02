const express = require('express')
const cors = require('cors')

const logsController = require('./controllers/logsController')
const v2logsController = require('./v2/controllers/logsController')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/logs', logsController)
// app.use('/v2/logs', v2logsController)

app.get('/', (req, res) => {
    res.send(`Welcome to M.O.K.A Captain Logs`)
})

app.get('*', (req, res) => {
    res.status(404).json({error: `404 Page Not Found`})
})

module.exports = app