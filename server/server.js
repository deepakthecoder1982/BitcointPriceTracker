const express = require('express');
const cors = require('cors');
const cryptoRoutes = require('./routes/cryptoRoutes');
const db = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use('/crypto', cryptoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
