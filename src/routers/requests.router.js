const express = require('express');
const { getCities, getStreets } = require('../controllers/requests.controller');
const router = new express.Router();

router.get('/city',getCities);

router.get('/street',getStreets)

module.exports = router;