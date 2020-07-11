const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

router.get('/notes', noteController.note_index);
router.post('/notes', noteController.note_create_post);
router.get('/create', noteController.note_create_get);
router.get('/notes/:id', noteController.note_details);
router.delete('/notes/:id', noteController.note_delete);

module.exports = router;