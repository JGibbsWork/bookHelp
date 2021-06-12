const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/825/:id')
.get(controller.get)


// https://help-ooyala.brightcove.com/sites/all/libraries/dita/en/video-platform/reference/dma_codes.html

module.exports = router