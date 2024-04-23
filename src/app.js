var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var resetRouter = require('./routes/reset');
var usersRouter = require('./routes/users');
var seedHelper = require('./dbHelper');
seedHelper.seed();

var app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reset', resetRouter);
app.use('/users', usersRouter);


module.exports = app;
