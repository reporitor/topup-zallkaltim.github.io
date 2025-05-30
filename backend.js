const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.static('public')); // folder HTML + CSS

app.get('/data', (req, res) => {
  res.json({ pesan: 'Dari backend ke HTML' });
});

app.listen(5000, () => {
  console.log('Server jalan di http://localhost:5000');
});
