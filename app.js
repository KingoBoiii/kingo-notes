const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.use(function(req, res) {
    res.status(404).render('404');
});

module.exports = app;
