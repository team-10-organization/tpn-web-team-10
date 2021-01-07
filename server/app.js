const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index')

// for input from json
app.use(express.json())

// for input from req.body
app.use(express.urlencoded({ extended:true }))

app.use('/', router)

app.get('/tes', (req, res) => {
    res.send('helo')
})

app.listen(port, () => {
    console.log('connected on localhost:' + port);
})