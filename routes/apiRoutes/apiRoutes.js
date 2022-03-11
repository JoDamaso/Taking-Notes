const { validateNote, createNote, findById, filterByQuery} = require('../../lib/notes');
const router = require('express').Router();
const { notes } = require('../../d/notes.json');
// need get all notes 
// need get a note by 'id'
// need post a note to body
// need to delete a note 

// GET all Notes
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// GET Note by 'id'
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id);
    if (result) {
        res.json(result);
    }
    res.json(result);
});

// POST note 
// users send data from client side of application to server
router.post('/notes', (req, res) => {
    // if any data in ther req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note was formatted correctly');
    } else {
    const note = createNote(req.body, animals);
    res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {

})

module.exports = router;