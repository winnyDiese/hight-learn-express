
const express = require('express')
const path = require('path')
const app = express()


// app.use(express.static('public'))
app.use(express.json())

const myMiddleware = (req, res, next) => {
    console.log(Date.now())
    next()
}


// Applique le middleware sur toute les requetes
app.use(myMiddleware)


// app.get('/', myMiddleware, (req, res)=>{
app.get('/', myMiddleware, (req, res)=>{
    // res.send('Hello world')
    // res.sendFile(path.join(__dirname + '/index.html'))
    res.cookie('name', 'tobi', {domain: 'example.com', path: '/admin', secure: true})
    res.end()
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.end()
})

app.listen(3000, console.log("Server started in port 3000"))