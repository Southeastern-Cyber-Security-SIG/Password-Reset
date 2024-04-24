var express = require('express');
var validator = require('validator');

var dbHelper = require('../dbHelper');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('reset/reset', { status: '' });
});

router.post('/', async function (req, res, next) {
  if (validator.isEmail(req.body.email)) {
    result = await dbHelper.getQuestion(req.body.email)
    console.log(result)
    if (result && result.length == 0) {
      console.log("Email not found")
      res.render('reset/reset', { status: 'Email not Found' });
    } else {
      console.log("Email found")
      res.render('reset/question', { status: '  ', email: req.body.email, question: result[0].question });
    }
  } else {
    res.render('reset/reset', { status: 'Enter a Valid Email' });
  }

});

router.post('/question', async function (req, res, next) {
  console.log(req.body)
  if (validator.isEmail(req.body.email) && validator.isAlphanumeric(req.body.answer)) {
    result = await dbHelper.checkQuestion(req.body.email, req.body.answer)

    console.log(result)
    if (result && result.length == 0) {
      console.log("Wrong Answer")
      res.render('reset/question', { status: 'Wrong Answer', email: req.body.email, question:  req.body.question });
    } else {
      console.log("Correct Answer")
      res.render('reset/password', { status: ' ', email: req.body.email, answer: req.body.answer });
    }
  } else {
    res.render('reset/question', { status: ' Something is Wrong  ', email: req.body.email, question: req.body.question });
  }

});

router.post('/password', async function (req, res, next) {
  console.log(req.body)
  if (validator.isEmail(req.body.email) && validator.isAlphanumeric(req.body.answer) && validator.isAlphanumeric(req.body.password)) {
    result = await dbHelper.resetPassword(req.body.email, req.body.answer, req.body.password)

    console.log(result)
   
    res.render('login', { status: 'Password has been reset' });
    

  } else {
    res.render('reset/password', { status: ' Something is Wrong  ', email: req.body.email, question: req.body.question });
  }

});


module.exports = router;