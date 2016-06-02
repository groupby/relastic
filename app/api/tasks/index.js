const express    = require('express');
const router     = express.Router();
const controller = require('./tasks.controller');

router.get('/', controller.getTasks);
router.post('/_start', controller.start);
router.post('/_stop', controller.stop);
router.post('/:id', controller.addTask);
router.post('/:id', controller.deleteTask);

module.exports = function () {
  return router;
};