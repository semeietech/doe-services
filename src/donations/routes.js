const express = require('express');
const router = express.Router();
const controller = require('../donations/controller');

router.get('/', controller.get);
router.get('/admin/:id', controller.getByID);
router.post('/', controller.post);

module.exports = router;