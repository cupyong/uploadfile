var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fileupload', upload.single('myfile'), function (req, res) {
   console.log(1);
    console.log(req.file);
  res.json(req.file)

})

//var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
//router.post('/fileupload', function (req, res, next) {
//    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//    //
//    // e.g.
//    //  req.files['avatar'][0] -> File
//    //  req.files['gallery'] -> Array
//    //
//    // req.body will contain the text fields, if there were any
//    console.log(12);
//    console.log(req.files);
//    res.send(req.files);
//})

//router.get('/fileupload', upload.single('avatar'), function (req, res) {
//
//  res.send(JSON.stringify(req.file))
//
//})
module.exports = router;
