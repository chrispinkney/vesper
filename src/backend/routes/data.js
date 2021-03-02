const express = require('express');
const bodyParser = require('body-parser');
const db = require('../services/firestore');

const router = express.Router();
router.use(bodyParser.json());

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
