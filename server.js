const express = require('express');
// enviorment variable 
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const { notes } = require('./db/notes.json');
const path = require('path');

// middle ware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// for modularization purposes 


// app.listen is always last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! Welcome to my server!`);
});