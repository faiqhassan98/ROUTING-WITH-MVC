const express = require('express');
const router = express.Router();

const controllerCat = require('../controller/controllerCat');

router.get('/', controllerCat.get);

router.post('/', controllerCat.post);

router.put('/', controllerCat.put);

router.delete('/', controllerCat.del);

module.exports = router;