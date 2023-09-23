//Connect to database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Student = require('./models/student');

let student
let students