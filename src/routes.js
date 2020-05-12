const express = require('express');

const MailgunController = require('./controllers/MailgunController');

const routes = express.Router();

routes.get('/mailgun', MailgunController.send);
routes.get('/domains', MailgunController.domains);

module.exports = routes;
