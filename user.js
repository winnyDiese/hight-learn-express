
const express = require('express')
const router = express.Router()

router.post('/user', (req, res) => {
    console.log('User router')
    console.log(req.body)
    res.send('User mode')
})

module.exports = router