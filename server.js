const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files like HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'Views')));

// Route for subscription.html
app.get('/subscription.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'subscription.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
