module.exports = (app) => {
	const status = require('../controllers/status.controller.js');

	app.get('/status', status.get);
}