const express = require('express');
const router = express.Router();
const controller = require('../rewards/controller');

router.post('/', controller.post);

module.exports = router;