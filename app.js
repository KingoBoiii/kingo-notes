const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.render('index.ejs', { title: 'Notes' });
});

app.get('/about', function(req, res) {
    res.render('about.ejs', { title: 'About' });
});

app.use(function(req, res) {
    res.status(404).render('404', { title: '404' });
});

module.exports = app;
