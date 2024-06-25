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

// Add functionality where if a user goes to

logs.get('/?order=asc', (req, res) => {
    logsArray.sort((a,b) => a - b)
    res.json(logsArray)
// sort a-b // /logs?order=asc it will organize the logs alphabetically
})

logs.get('/?order=desc', (req, res) => {
    logsArray.sort((a,b) => b.value - a.value)
    res.json(logsArray)
// sort b-a // /logs?order=desc it will organize the logs in reverse alphabetical order
})

logs.get('/?mistakes=true', (req, res) => {
    logsArray.every(log.mistakesWereMadeToday === true)
    res.json(logsArray)
// every // /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
})

logs.get('/?mistakes=false', (req, res) => {
    logsArray.every(log.mistakesWereMadeToday === false)
    res.json(logsArray)
// every // /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
})

logs.get('?/lastCrisis=gt10', (res, req) => {
    logsArray.filter()
    res.json(logsArray)
// filter // /logs?lastCrisis=gt10 it will return all the logs where the daysSinceLastCrisisis greater than 10
})

logs.get('?lastCrisis=gte20', (req, res) => {
    logsArray.filter((log) => log.daysSinceLastCrisis >= 20)
    res.json(logsArray)
// filter // /logs?lastCrisis=gte20it will return all the logs where the daysSinceLastCrisisis greater than or equal to 20
})

logs.get('?lastCrisis=lte5', (req, res) => {
    logsArray.filter((log) => log.daysSinceLastCrisis <= 5)
    res.json(logsArray)
// filter // /logs?lastCrisis=lte5it will return all the logs where the daysSinceLastCrisisis less than or equal to 5
})


logs.post('/', (req, res) => {
    logsArray.push(req.body)
    res.json(logsArray[logsArray.length - 1])
})
           
// less resistant to mistakes, see their value, see how they support my learning and the actions I take - Coach Joshua

module.exports = logs







