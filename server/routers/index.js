const router = require('express').Router()
const apiController = require('../controller/api')
const userController = require('../controller/users')

// Users login
router.post('/login', userController)
router.post('/register', userController)

// authentication
// router.use()

//API
router.use('/weather', apiController.getWeatherbyCoords)
router.use('/music', apiController.playMusic)
router.use('/news', apiController)


module.exports = router