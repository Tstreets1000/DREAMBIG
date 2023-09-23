const Teacher = require('../../models/teacher')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


function jsonTeacher(_, res) {
    res.json(res.locals.data)
}

function jsonTeachers(_, res) {
    res.json(res.locals.data)
}


const checkToken = (req, res) => {
    console.log('req.teacher', req.teacher)
    res.json(req.exp)
}

const dataController = {
    async auth(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = jwt.verify(token, process.env.SECRET)
            const teacher = await Teacher.findOne({ _id: data.id })
            if (!teacher) {
                throw new Error('Bad Credentials')
            }
            req.teacher = teacher
            next()
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    },

    async create(req, res, next) {
        try {
            const teacher = await Teacher.create(req.body)
            // console.log(req.body, teacher)
            // token will be a string
            const token = createJWT(teacher)
            // console.log(token)
            // send back the token as a string
            // which we need to account for
            // in the client
            res.locals.data.teacher = teacher
            res.locals.data.token = token
            next()
        } catch (error) {
            console.log('you got a database problem')
            res.status(400).json({ message: error.message})
        }
    },

    async allTeachers(req, res, next) {
        try {
            const teacher = await Teacher.find({})
            res.json(teachers)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async show(req, res, next) {
        try {
            const teacher = await Teacher.findOne({ _id: req.params.id })
            res.json(teacher)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async login(req, res, next) {
		try {
			const teacher = await Teacher.findOne({ email: req.body.email });
			if (!teacher) throw new Error();
			const match = await bcrypt.compare(req.body.password, teacher.password);
			if (!match) throw new Error();
			teacher.isLoggedIn = true
			res.locals.data.teacher = teacher;
			res.locals.data.token = createJWT(teacher);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},

    async update(req, res, next) {
        try {
            const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.locals.data.student = teacher
            res.status(200).json({teacher})
            next()
        } catch (error) {
            res.status(400).json({ message: error.message  })  
        }
    },

    async delete (req, res, next) {
        try {
            const teacher = await Teacher.findByIdAndDelete(req.params.id)
            res.locals.data.teacher = teacher
            res.status(204).json({ message: 'Thanos Snap!'})
        } catch (error) {
            res.status(400).json({ message: error.message  })
        }
    },

   
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

function createJWT(teacher) {
	return jwt.sign(
		// data payload
		{ teacher },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
