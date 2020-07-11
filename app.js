const express = require('express');
const app = express();
const morgan = require('morgan');
// const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.render('index.ejs', { title: 'Home' });
});

app.get('/about', function(req, res) {
    res.render('about.ejs', { title: 'About' });
});

app.use('/notes', noteRoutes);

app.use(function(req, res) {
    res.status(404).render('404', { title: '404' });
});

module.exports = app;
