const express = require('express');
const app = express();

const catRoute = require('./routes/categories');
const MovRoute = require('./routes/movies');

app.use('/api/categories', catRoute);
app.use('/api/movies', MovRoute);

app.listen(4830, () =>{
    console.log("server is running on port 4830");
});