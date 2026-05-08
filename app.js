const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Production-Grade Pipeline Active!');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'All systems go' });
});

module.exports = app;
