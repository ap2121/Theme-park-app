const Park = require('../models/park')
const Ride = require('../models/ride')

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllParks
}
