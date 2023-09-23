// need to require mongoose & bcrypt
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_ROUNDS = 5
// user schema will need name (string) require this to be true and email (string) require to be true, 
    //and make it unique, so emails cannot be the same.
// password(string) add minimum length and required.
// add timestamps to know when people sign in/up.

const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, trim: true, lowercase: true, required: true },
        password: { type: String, minLength: 5, trim: true, required: true },
		isLoggedIn: { type: Boolean, required: true, default: false },
        teacher: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}],
        coach: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coach'}]
    }, 
    {
        timestamps: true
    }
)

// add studentSchema save function
studentSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	//updates the password with the computed hash
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
	return next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;