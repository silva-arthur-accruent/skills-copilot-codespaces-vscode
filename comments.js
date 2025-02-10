// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware
app.use(bodyParser.json());

// Read from file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// GET request
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST request
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});