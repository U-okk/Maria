// Node.js Example (Express)
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save to database logic here (MongoDB/MySQL)
    res.send('User registered successfully');
});
