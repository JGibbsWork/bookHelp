const db = require('./index.js');
const mongoose = require('mongoose');

const results = {
  get: () => db.results.find(),
  getCity: (city) => db.results.find({city}),
  getTerm: (term) => db.results.find({term}),
  post: (item) => db.results.create(item)
};


module.exports = results;