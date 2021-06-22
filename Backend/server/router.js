const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/:city/:id')
  .post(controller.newSearch)

router
  .route('/results/:city')
  .get(controller.getCity)


module.exports = router