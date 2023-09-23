const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const { getPexelsData } = require('./pexel-server');
const cors = require('cors');

const corsOptions = {
	origin: 'http://tjhikeaproject.me/pexels'// NEED TO MATCH URL NAME IN DIGITAL OCEAN
  };
  
  /* Middleware */
  app.use(express.json());
  app.use(express.static('public'));
  app.use(logger('dev'));
  
  app.use(cors(corsOptions));
  
  

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

app.get('/pexels', async (req, res, next) => {
	try {
		const pexelsData = await getPexelsData();
		//console.log("GET ROUTE", pexelsData);
		res.json(pexelsData);
	} catch (error) {
		console.error('Error fetching Pexels data:', error);
		res.status(500).json({ error: 'Failed to fetch Pexels data' });
	}
});

app.use(require('./config/checkToken'));
app.use('/api/students', require('./routes/api/students'));
app.use('/api/coaches', require('./routes/api/coaches'));
app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

module.exports = app;