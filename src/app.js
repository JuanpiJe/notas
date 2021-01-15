var express = require('express');
var path = require('path');
const methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var detailRouter = require('./routes/detail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(methodOverride('_method'))
app.use('/', indexRouter);
app.use('/detail', detailRouter);


module.exports = app
