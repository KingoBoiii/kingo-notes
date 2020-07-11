const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

router.get('/', noteController.note_index);
router.post('/', noteController.note_create_post);
router.get('/create', noteController.note_create_get);
router.get('/:id', noteController.note_details);
router.delete('/:id', noteController.note_delete);

module.exports = router;