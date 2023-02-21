const Park = require('../models/park')
const Ride = require('../models/ride')

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    res.status(200).json({ parks })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getParkById = async (req, res) => {
  try {
    const parks = await Park.findById()
    res.status(200).json({ parks })
  } catch (error) {
    res.status(500).json({ error: error.message })
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

const getRideById = async (req, res) => {
  try {
    const rides = await Ride.findById()
    res.status(200).json({ rides })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deletePark = async (req, res) => {
  try {
    const { parkId } = req.params
    const deleted = await Park.findByIdAndDelete(parkId)
    if (deleted) {
      res.status(200).send('Park Closed')
    }
    throw new Error('Huh?  There is no such park...')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteRide = async (req, res) => {
  try {
    const { rideId } = req.params
    const deleted = await Park.findByIdAndDelete(rideId)
    if (deleted) {
      res.status(200).send('Ride Out of Order')
    }
    throw new Error('Huh?  There is no such ride...')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllParks,
  getAllRides,
  getParkById,
  getRideById,
  deletePark,
  deleteRide
}
