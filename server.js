const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from public directory
app.use(express.static('public'));

// Main landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Your portfolio
app.get('/het-portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/het-portfolio.html'));
});

// Friend's portfolio
app.get('/hema-portfolio/:name', (req, res) => {
    // You can create different portfolio pages for different friends
    res.sendFile(path.join(__dirname, 'views/hema-portfolio.html'));
});

app.get('/panda-portfolio/:name', (req, res) => {
    // You can create different portfolio pages for different friends
    res.sendFile(path.join(__dirname, 'views/panda-portfolio.html'));
});

app.get('/chait-portfolio/:name', (req, res) => {
    // You can create different portfolio pages for different friends
    res.sendFile(path.join(__dirname, 'views/chait-portfolio.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
