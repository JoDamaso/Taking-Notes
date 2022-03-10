const express = require('express');
// enviorment variable 
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

// middle ware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);

// app.listen is always last
app.listen(PORT, () => {
    console.log(gradient.instagram(`API server now on port ${PORT} || http://localhost:${PORT}`));
})