const Student = require('../../models/student')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


function jsonStudent(_, res) {
    res.json(res.locals.data)
}

function jsonStudents(_, res) {
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
            const student = await Student.findOne({ _id: data.id })
            if (!student) {
                throw new Error('Bad Credentials')
            }
            req.student = student
            next()
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    },

    async create(req, res, next) {
        try {
            const student = await Student.create(req.body)
            // console.log(req.body, student)
            // token will be a string
            const token = createJWT(student)
            // console.log(token)
            // send back the token as a string
            // which we need to account for
            // in the client
            res.locals.data.student = student
            res.locals.data.token = token
            next()
        } catch (error) {
            console.log('you got a database problem')
            res.status(400).json({ message: error.message})
        }
    },

    async allStudents(req, res, next) {
        try {
            const students = await Student.find({})
            res.json(students)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async show(req, res, next) {
        try {
            const student = await Student.findOne({ _id: req.params.id })
            res.json(student)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async login(req, res, next) {
		try {
			const student = await Student.findOne({ email: req.body.email });
			if (!student) throw new Error();
			const match = await bcrypt.compare(req.body.password, student.password);
			if (!match) throw new Error();
			student.isLoggedIn = true
			res.locals.data.student = student;
			res.locals.data.token = createJWT(student);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},

    async update(req, res, next) {
        try {
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.locals.data.student = student
            res.status(200).json({student})
            next()
        } catch (error) {
            res.status(400).json({ message: error.message  })  
        }
    },

    async delete (req, res, next) {
        try {
            const student = await Student.findByIdAndDelete(req.params.id)
            res.locals.data.student = student
            res.status(204).json({ message: 'Thanos Snap!'})
        } catch (error) {
            res.status(400).json({ message: error.message  })
        }
    },

    async profile (req, res, next) {
        try {
            const student = await Student.findById(req.student._id).populate('profile')
            console.log(student)
            //populate profile. after pop student, console log student
            res.locals.data.student = student
            res.status(204).json({ message: 'Student found!'})
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

function createJWT(student) {
	return jwt.sign(
		// data payload
		{ student },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
