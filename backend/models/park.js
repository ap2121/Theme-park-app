const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
  {
    image: { type: String, required: false },
    name: { type: String, required: true },
    location: { type: String, required: false },
    dateClosed: { type: String, required: true },
    capacity: { type: String, required: false },
    description: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Park', Park)
