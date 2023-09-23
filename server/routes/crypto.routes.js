// routes/cryptoRoutes.js
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CryptoData = require('../models/cryptoData');

// Route to fetch and store data from the WazirX API
router.get('/fetch', async (req, res) => {
  try {
    const response = await fetch('https://api.wazirx.com/api/v2/tickers');
    const data = await response.json();

    // Extract the top 10 results
    const top10 = data.slice(0, 10);

    // Insert the data into MongoDB
    await CryptoData.insertMany(top10);

    res.status(200).json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    console.error('Error fetching and storing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
