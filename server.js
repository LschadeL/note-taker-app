//require packages
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

//selecting the port to run from
const PORT = process.env.PORT || 3001;

//Middleware to parse JSON
app.use(express.static('public'));
app.use(express.json());

//Creating endpoint for index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
});

//Creating endpoint for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
});

//handling server reading of db.json
app.get('/api/notes', (req, res) => {
    try {
        const data = fs.readFile(path.join(__dirname, 'Develop/db/db.json'), 'utf8');
        const notes = JSON.parse(data);
        res.json(notes);
    }
    //If there is an error return a 500 Internal Server Error response
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error: Our bad!'});
    }
});

