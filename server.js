//require packages
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

//Middleware to parse JSON
app.use(express.static('public'));
app.use(express.json());

//Creating endpoint for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});