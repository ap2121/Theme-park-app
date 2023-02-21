require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to db and listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
