'use strict';

const express = require('express');

const port = 8080;
const app = express();

app.get('/', (req, res) => {
	res.json('Hello World')
});

require('./app/routes/status.routes.js')(app);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});