const express = require('express');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Get all sessions (with optional range filter)
app.get('/sessions', (req, res) => {
  let sql = 'SELECT * FROM session';
  const { range } = req.query;

  if (range === 'week') {
    sql += " WHERE session_date >= CURDATE() - INTERVAL 7 DAY";
  } else if (range === 'month') {
    sql += " WHERE session_date >= CURDATE() - INTERVAL 1 MONTH";
  } else if (range === '3months') {
    sql += " WHERE session_date >= CURDATE() - INTERVAL 3 MONTH";
  } else if (range === 'year') {
    sql += " WHERE session_date >= CURDATE() - INTERVAL 1 YEAR";
  }

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a session
app.post('/sessions', (req, res) => {
  const { user_id, mentor_id, session_date, duration } = req.body;
  const sql = 'INSERT INTO session (user_id, mentor_id, session_date, duration) VALUES (?, ?, ?, ?)';
  db.query(sql, [user_id, mentor_id, session_date, duration], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Session added', session_id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});