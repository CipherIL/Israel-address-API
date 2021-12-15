const express = require('express');
const requestsRouter = require('./routers/requests.router');
const cors = require('cors');

const corsOptions = {
    origin: "*",
    methods: ['GET'],
    allowedHeaders: [],
}

const app = express();
app.use(requestsRouter);
app.use(cors(corsOptions));

module.exports = app;