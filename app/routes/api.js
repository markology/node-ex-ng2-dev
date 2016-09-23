var express = require('express'),
  router = express.Router(),
  path = require('path');

module.exports = function(socket) {

  //calls function from controller to render index.html
  router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('./app/views/index.html'));
  });


  return router;

}
