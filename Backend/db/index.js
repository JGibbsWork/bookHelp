const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const mongoUri = 'mongodb://localhost/bookHelp';

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const results = require('./results.js');

mongoose.Promise = global.Promise;

let db = mongoose.connect(mongoUri)
  .then(()=>{console.log('mongo mongo in da house in da house')})

let Results = mongoose.model('Results', results);

module.exports = { results: Results };