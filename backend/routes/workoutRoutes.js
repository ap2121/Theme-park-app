const {Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('Root Test'))

router.get('/parks', controllers.getAllParks)

module.exports = router