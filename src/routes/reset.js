var express = require('express');
var validator = require('validator');

var dbHelper = require('../dbHelper');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('reset/reset', { status: '' });
  });

  router.post('/', async function(req, res, next) {
    if(validator.isEmail(req.body.email)){
        result = dbHelper.getQuestion(req.body.email)
        console.log(result)
        if(result == "[]"){
          res.render('reset/reset', { status: 'Email Found' });
        }
        res.render('reset/reset', { status: 'Email not Found' });

    }else{
        res.render('reset/reset', { status: 'Enter a Vaild Email' });
    }
   
  });


module.exports = router;