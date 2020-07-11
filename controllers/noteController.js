const Note = require('../models/note');

const note_index = function(req, res) {
    Note.find().sort({ createdAt: -1 })
        .then(function(result) {
            res.render('notes/index.ejs', { title: 'Notes', notes: result });
        }).catch(err => console.log(err));
}

const note_create_get = (req, res) => {
    res.render('notes/create.ejs', {
        title: 'Create a Note'
    });
}

const note_create_post = (req, res) => {
    const note = new Note(req.body);
    note.save().then((result) => {
        res.redirect('/notes');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    note_index,
    note_create_get,
    note_create_post
}