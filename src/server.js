const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const db = new sqlite3.Database(':memory:');
db.serialize(function () {
  db.run('CREATE TABLE user (username TEXT, password TEXT, name TEXT)');
  db.run("INSERT INTO user VALUES ('admin', 'admin123', 'App Administrator')");
});

app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const query =
    "SELECT name FROM user where username = '" +
    username +
    "' and password = '" +
    password +
    "'";

  console.log('username: ' + username);
  console.log('password: ' + password);
  console.log('query: ' + query);

  db.get(query, function (err, row) {
    if (err) {
      console.log('ERROR', err);
      res.status(500).json({ error: 'An error occurred' });
    } else if (!row) {
      res.status(401).json({ error: 'Invalid Username or Password' });
    } else {
      res.json({ name: row.name });
    }
  });
});

// C'est le code qui marche, sécurisé

// app.post('/login', function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   const query = 'SELECT name FROM user WHERE username = ? AND password = ?';

//   db.get(query, [username, password], function (err, row) {
//     if (err) {
//       console.log('ERROR', err);
//       res.status(500).json({ error: 'An error occurred' });
//     } else if (!row) {
//       res.status(401).json({ error: 'Invalid Username or Password' });
//     } else {
//       res.json({ name: row.name });
//     }
//   });
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
