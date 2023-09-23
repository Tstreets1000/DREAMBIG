const express = require('express');
const router = express.Router()
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const { dataController } = require('../../controllers/api/students')

router.post('/', ensureLoggedIn, dataController.profile)


module.exports = router