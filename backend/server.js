
const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
