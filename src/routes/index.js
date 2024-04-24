var express = require('express');
var validator = require('validator');

var dbHelper = require('../dbHelper')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { status: '' });
});

router.post('/login', async function(req, res, next) {
  if (validator.isEmail(req.body.email) &&  validator.isAlphanumeric(req.body.password) && req.body.password != "NULL") {
    result = await dbHelper.attemptLogin(req.body.email, req.body.password)
    console.log(result)
    if (result && result.length == 1) {
      res.cookie("user", result[0].authToken)
      res.redirect(302, "/users")
    }else{
      res.render('login', { status: 'Bad email or password' });
    }
  } else {
    res.render('login', { status: 'Email and Password are not valid' });
  }
});

router.get('/logout', function(req, res, next) {
  
  res.clearCookie("user");
  res.redirect(302, "/")
  console.log("User has logged out")

});

module.exports = router;
