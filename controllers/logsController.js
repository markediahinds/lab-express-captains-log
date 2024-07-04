const express = require('express')
const logs = express.Router()
const logsArray = require('../models/log')

logs.get('/', (req, res) => {
    // res.json(logsArray)
    // console.log(req.query)
    const {  order, alive } = req.query
    // console.log(order, mistakes)
    const filteredArr = logsArray.filter((log) =>
        log.yearsAlive.toString() == alive) // converting into numbers, and then comparing numbers | true 1, false 0 | string NAN [if str was a num, it would find match]
    // res.json(filteredArr)

    if(order == 'asc') {
        logsArray.sort((a,b) => a.captainName.localeCompare(b.captainName))
    } else if(order == 'desc') {
            logsArray.sort((a,b) => b.captainName.localeCompare(a.captainName))
    }
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

// logs.get('/?order=desc', (req, res) => {
//     logsArray.sort((a,b) => b.value - a.value)
//     res.json(logsArray)
// // sort b-a // /logs?order=desc it will organize the logs in reverse alphabetical order
// })

// logs.get(, (req, res) => {
//     logsArray.every(log.mistakesWereMadeToday === mistakes)
//     res.json(logsArray)
// every // /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
// })

// logs.get('/?mistakes=false', (req, res) => {
//     logsArray.every(log.mistakesWereMadeToday === false)
//     res.json(logsArray)
// // every // /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
// })

// logs.get('?/lastCrisis=gt10', (res, req) => {
//     logsArray.filter()
//     res.json(logsArray)
// // filter // /logs?lastCrisis=gt10 it will return all the logs where the daysSinceLastCrisisis greater than 10
// })

// logs.get('?lastCrisis=gte20', (req, res) => {
//     logsArray.filter((log) => log.daysSinceLastCrisis >= 20)
//     res.json(logsArray)
// // filter // /logs?lastCrisis=gte20it will return all the logs where the daysSinceLastCrisisis greater than or equal to 20
// })

// logs.get('?lastCrisis=lte5', (req, res) => {
//     logsArray.filter((log) => log.daysSinceLastCrisis <= 5)
//     res.json(logsArray)
// // filter // /logs?lastCrisis=lte5it will return all the logs where the daysSinceLastCrisisis less than or equal to 5
// })


logs.post('/', (req, res) => {
    logsArray.push(req.body)
    res.json(logsArray[logsArray.length - 1])
})
           
// less resistant to mistakes, see their value, see how they support my learning and the actions I take - Coach Joshua

// THIS is a PUT request aka method that UPDATES UPDATES UPDATES ONE SPECIFIC ELEMENT AT A TIME
logs.put('/:arrayIndex', (req, res) => { // our two params are the arr idx and the callback func which the params are the incoming req and the outgoing res
    const { arrayIndex } = req.params // when focusing on one specific element, we always extract the arr idx from the param in the req. Req is a big obj, params is another obj (and key of req), .params list the params in the url 
    logsArray[arrayIndex] = req.body // we grab the specific element (within our arr, each ele has a specific idx #) (____Array grabs the entire data set we have, the entire arr we have | while the [arrayIndex] refers to that specific INDEX aka ELEMENT within the arr).  we grab that specific ele and update it's body with the updated body we receive (or by us sending an updated body to ourcelves via Postman). 
    res.status(200).json(logsArray[arrayIndex]) // then we return/render a '200' status, along with the updated element [we updated the body of the ele]
})

logs.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(logsArray[arrayIndex]) {
        logsArray.splice(arrayIndex, 1)
        res.json({ message: `You've successfully deleted log: `}) // name of log or entire obj 
    } else {
        res.status(404).json({ error: `Log: Not Found`}) // Log captainName
    }
})

module.exports = logs







