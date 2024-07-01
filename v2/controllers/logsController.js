const express = require('express')
const logs = express.Router()
const logsArray = require('../../models/log')


logs.get('/:index', (req, res) => {
    const { index } = req.params
   
})

module.exports = logs