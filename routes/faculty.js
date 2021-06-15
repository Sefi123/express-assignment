var express = require('express');
var router = express.Router();
var detail= require('../models/detail');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let details= await detail.find();
    console.log(details);
  res.render('faculty/list', {title : "Faculty Details", details});
});

module.exports = router;
