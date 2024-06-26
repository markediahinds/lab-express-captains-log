const checkForCaptainNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('captainName')) {
        next()
    } else {
        res.json({ error: `Log must contain Captain's name`})
    }
}