require('dotenv').config();
require('./config/database');
const app = require('./app-server');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8010;

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});




