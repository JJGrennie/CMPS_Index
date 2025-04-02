var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express App!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple Express application.</p>');
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Page</h1>
        <form action="/contact" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    res.send(`<h1>Thank you, ${name}!</h1><p>We have received your message: ${message}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


