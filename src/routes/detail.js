var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController')


router.get('/:id', mainController.detail.view)
router.put('/:id', mainController.detail.edit)

module.exports = router;
