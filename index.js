const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const apiKey = process.env.APIKEY;

app.use(logger('dev'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Running on port ${port}`));