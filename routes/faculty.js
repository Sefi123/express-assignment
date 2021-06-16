var express = require('express');
var router = express.Router();
var detail= require('../models/detail');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let details= await detail.find();
  res.render('faculty/list', {title : "Faculty Details", details});
});

router.get('/add', async function(req, res, next) {
res.render('faculty/add');
});

router.post('/add', async function(req, res, next) {
  console.log(req.body);
  res.render('faculty/add');
  });

module.exports = router;
