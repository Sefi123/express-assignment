var express = require('express');
const detail = require('../models/detail');
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

router.post('/faculty/add', async function(req, res, next) {
  var detail=new detail(req.body);
  await detail.save();
  res.redirect('faculty');
  });

module.exports = router;
