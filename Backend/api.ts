const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const db = require('../Backend/db.ts');
const bcrypt = require('bcrypt');

app.use(express.json());

app.use('/static', express.static('static'));

app.get('/get-gym-exercise', async (req, res) => {
  try {
    const query = db.query('SELECT * FROM gym');
    const data = await query;
    res.json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});
app.get('/get-rehabillitation-exercise', async (req, res) => {
  try {
    const query = db.query('SELECT * FROM rehabillitation');
    const data = await query;
    res.json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});
app.get('/get-gym-exercise/:id', async (req, res) => {
  const id = req.params;
  try {
    const query = db.query(`SELECT * FROM gym WHERE id = ${id}`);
    const data = await query;
    res.json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
