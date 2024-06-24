const express = require('express')
const logs = express.Router()
const logsArray = require('../models/log')

logs.get('/', (req, res) => {
    res.json(logsArray)
})

logs.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(logsArray[arrayIndex]){
        res.status(200).json(logsArray[arrayIndex])
    } else {
        res.status(404).json({error: `Pet Not Found`})
    }
})

module.exports = logs