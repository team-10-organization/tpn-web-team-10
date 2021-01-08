const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index')
const cors = require('cors')

// for input from json
app.use(express.json())

app.use(cors())
// for input from req.body
app.use(express.urlencoded({ extended:true }))

app.use('/', router)

app.listen(port, () => {
    console.log('connected on localhost:' + port);
})