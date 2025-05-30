const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // biar bisa diakses dari frontend beda origin

app.get('/data', (req, res) => {
  res.json({ pesan: 'Halo dari backend' });
});

app.listen(5000, () => {
  console.log('Server jalan di http://localhost:5000');
});
