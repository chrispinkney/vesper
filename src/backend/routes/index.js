const express = require('express');
const data = require('./data');

const router = express.Router();

router.use('/api', data);

module.exports = router;
