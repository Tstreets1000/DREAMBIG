const Coach = require('../../models/coach')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


function jsonCoach(_, res) {
    res.json(res.locals.data)
}

function jsonCoaches(_, res) {
    res.json(res.locals.data)
}


const checkToken = (req, res) => {
    console.log('req.student', req.student)
    res.json(req.exp)
}

const dataController = {
    async auth(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = jwt.verify(token, process.env.SECRET)
            const coach = await Coach.findOne({ _id: data.id })
            if (!coach) {
                throw new Error('Bad Credentials')
            }
            req.coach = coach
            next()
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    },

    async create(req, res, next) {
        try {
            const coach = await Coach.create(req.body)
            // console.log(req.body, coach)
            // token will be a string
            const token = createJWT(coach)
            // console.log(token)
            // send back the token as a string
            // which we need to account for
            // in the client
            res.locals.data.coach = coach
            res.locals.data.token = token
            next()
        } catch (error) {
            console.log('you got a database problem')
            res.status(400).json({ message: error.message})
        }
    },

    async allCoaches(req, res, next) {
        try {
            const coaches = await Coach.find({})
            res.json(coaches)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async show(req, res, next) {
        try {
            const coach = await Coach.findOne({ _id: req.params.id })
            res.json(coach)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async login(req, res, next) {
		try {
			const coach = await Coach.findOne({ email: req.body.email });
			if (!coach) throw new Error();
			const match = await bcrypt.compare(req.body.password, coach.password);
			if (!match) throw new Error();
			coach.isLoggedIn = true
			res.locals.data.coach = coach;
			res.locals.data.token = createJWT(coach);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},

    async update(req, res, next) {
        try {
            const coach = await Coach.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.locals.data.coach = coach
            res.status(200).json({coach})
            next()
        } catch (error) {
            res.status(400).json({ message: error.message  })  
        }
    },

    async delete (req, res, next) {
        try {
            const coach = await Coach.findByIdAndDelete(req.params.id)
            res.locals.data.coach = coach
            res.status(204).json({ message: 'Thanos Snap!'})
        } catch (error) {
            res.status(400).json({ message: error.message  })
        }
    }

    
}

const apiController = {
	auth(req, res) {
		res.json(res.locals.data.token);
	}
};

module.exports = {
	checkToken,
	dataController,
	apiController
};

/* -- Helper Functions -- */

function createJWT(coach) {
	return jwt.sign(
		// data payload
		{ coach },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
