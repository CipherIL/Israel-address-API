const express = require('express');
const requestsRouter = require('./routers/requests.router');

const app = express();
app.use(requestsRouter);

module.exports = app;