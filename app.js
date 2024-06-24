const express = require('express')

const logsController = require('./controllers/logsController')

const app = express()

app.use(express.json())

app.use('/logs', logsController)

app.get('/', (req, res) => {
    res.send(`Welcome to M.O.K.A Captain Logs`)
})

module.exports = app