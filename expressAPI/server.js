const express = require('express');
const pool = require('./database');

const app = express();

app.get('/', (req, res) => {
    res.send("home")
});

app.listen(4000, () => console.log("running on port 4000"));