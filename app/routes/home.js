var express = require('express'),
  router = express.Router(),
  path = require('path'),
  mkdirp = require('mkdirp'),
  multer = require('multer'),
  storage = multer.diskStorage({
    destination: function(req, file, cb) {
      mkdirp(path.join(__dirname, ('../../public/uploads/users/' + req.body.username + '/' + file.fieldname)), function(err) {
        cb(null, path.join(__dirname, ('../../public/uploads/users/' + req.body.username + '/' + file.fieldname)));
      });
    },
    filename: function(req, file, cb) {
      var filename = file.originalname.replace(/\s/g, '').replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");;
      cb(null, filename);
    }
  }),
  upload = multer({ storage: storage }),
  file = upload.single('file');


module.exports = function(passport) {

  router.get('/',
    function(req, res, next) {
      res.sendFile(path.resolve('./app/views/index.html'));
    });


  return router;
}
