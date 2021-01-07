const router = require('express').Router()
const apiController = require('../controller/api')
const userController = require('../controller/users')
const { authentication } = require('../middleware/auth')
const errHandler = require('../middleware/errHandler')

// Users login
router.post('/register', userController.register)
router.post('/login', userController.login)

// authentication
router.use(authentication)

//API
router.get('/news', apiController.news)
router.get('/weather', apiController.getWeatherbyCoords)
router.get('/music', apiController.playMusic)
router.use(errHandler)

module.exports = router