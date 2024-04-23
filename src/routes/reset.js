var express = require('express');
var validator = require('validator');

var dbHelper = require('../dbHelper');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('reset/reset', { status: '' });
  });

  router.post('/', function(req, res, next) {
    if(validator.isEmail(req.body.email)){
        result = dbHelper.getQuestion(email)
        
        res.render('reset/reset', { status: 'Done' });

    }else{
        res.render('reset/reset', { status: 'Enter a Vaild Email' });
    }
   
  });


module.exports = router;