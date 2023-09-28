
const express = require('express')
const user = require('./user')
const app = express()


app.use(express.json())
app.use(user)

app.get('/', (req, res)=>{
    res.cookie('name', 'tobi', {domain: 'example.com', path: '/admin', secure: true})
    res.end()
})


app.listen(3000, console.log("Server started in port 3000"))