const express = require('express');
const requestsRouter = require('./routers/requests.router');
const cors = require('cors');

const corsOptions = {
    origin: "*",
    methods: ['GET'],
    allowedHeaders: [],
}

const app = express();
app.use(cors(corsOptions));
app.use(requestsRouter);


module.exports = app;