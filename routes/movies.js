const express = require('express');
const router = express.Router();

const controllerMov = require('../controller/controllerMov');

router.get('/', controllerMov.get);

router.post('/', controllerMov.post);

router.put('/', controllerMov.put);

router.delete('/', controllerMov.del);

module.exports = router;