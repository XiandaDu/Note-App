const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

//App Route
router.get('/', mainController.homepage)
router.get('/about', mainController.about)
router.get('/feature', mainController.feature)
router.get('/faqs', mainController.faqs)

module.exports = router
