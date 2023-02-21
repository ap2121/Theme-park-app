require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))
