const path = require('path');
const router = require('express').Router();

// // need to path these requests to html page when landing on the app
// // get home page '/'
// // get notes page '/notes'
// // set wildcard with "*" if they try and search for anything relative 

// HTML routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
})
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;