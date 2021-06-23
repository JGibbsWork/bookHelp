const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/:city/:id')
  .post(controller.newSearch)

router
  .route('/results/city/:city')
  .get(controller.getCity)

router
  .route('/results/term/:city')
  .get(controller.getCity)

router
  .route('/results/all')
  .get(controller.getAll)


module.exports = router