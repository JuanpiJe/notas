var express = require('express');
var router = express.Router();
var mainController = require ('../controllers/mainController')

router.get('/', mainController.index.view)
router.post('/', mainController.index.create)
router.delete('/:id', mainController.index.delete)

module.exports = router;