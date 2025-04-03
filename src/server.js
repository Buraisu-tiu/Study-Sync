const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Read the accounts.json file
  fs.readFile('accounts.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading accounts file:', err);
      return res.status(500).send('Error reading accounts file');
    }

    // Parse the file and check for the user
    const accounts = data
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => JSON.parse(line));

    const user = accounts.find((account) => account.username === username);

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Compare the hashed password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).send('Error verifying password');
      }

      if (result) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid username or password');
      }
    });
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});