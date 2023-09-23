//Connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
const Student = require('./models/student');
const Teacher = require('./models/teacher');
const Coach = require('./models/coach');


let student, teacher, coach
let students, teachers, coaches