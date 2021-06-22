const mongoose = require('mongoose');

let resultsSchema = mongoose.Schema({

  searchDate: String,
  city: String,
  term: String,
  localResults: Array,
  stateResults: Array,
  nationalResults: Array

});

module.exports = resultsSchema;