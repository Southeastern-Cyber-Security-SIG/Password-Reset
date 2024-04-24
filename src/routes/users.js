var express = require('express');
var dbHelper = require('../dbHelper')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  if(req.cookies['user']){
    result = await dbHelper.getIdentity(req.cookies['user'])
    if(result && result.length == 1){
      users = await dbHelper.getAllUsers()
       res.render('user', { name: result[0].name, flag:result[0].flag, users:users });
    }else{
      res.redirect(403, "/login")
    }
  }else{
    res.redirect(401, "/login")
  }
  

});

module.exports = router;
