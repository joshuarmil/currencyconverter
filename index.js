const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const app = express();
const path = require('path');
const convert = require('./conversion');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const apiKey = process.env.APIKEY;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.post('/convert', convert.conversion);

app.listen(port, () => console.log(`Running on port ${port}`));
