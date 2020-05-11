const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(routes);

let port = process.env.DEV_PORT_LISTEN;
app.listen(port);