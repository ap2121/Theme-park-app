require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, ()=> {
            console.log(`Connected to db and listening on port ${process.env.PORT}`)
        })
    })
        .catch((error) => {
            console.log(error)
        })