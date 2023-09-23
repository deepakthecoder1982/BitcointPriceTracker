// models/cryptoData.js
const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

module.exports = mongoose.model('CryptoData', cryptoDataSchema);
