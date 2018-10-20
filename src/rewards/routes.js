const express = require('express');
const router = express.Router();
const controller = require('../rewards/controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.put('/:id', controller.put);

module.exports = router;