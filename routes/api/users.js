// /routes/api/users.js
const express = require('express')
const router = express.Router()
const {
	checkToken,
	dataController,
	apiController
} = require('../../controllers/api/users')


const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST - Create /api/users
router.post('/', dataController.create, apiController.auth) // Good

// Post - Create /api/users
router.post('/profile', ensureLoggedIn, dataController.profile)

// GET - All /api/users
router.get('/', dataController.allUsers, apiController.auth) // Good

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

// GET - Single /api/users/:id
router.get('/:id', dataController.show, apiController.auth) // Good

// POST - Login /api/users/login
router.post('/login', dataController.login, apiController.auth) // Good

// PUT - Update /api/users/:id
router.put('/:id', dataController.update, apiController.auth) // Good

// DELETE - Delete /api/users/delete
router.delete('/:id', dataController.delete, apiController.auth) // Good



module.exports = router