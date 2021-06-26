const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const mongoUri = "mongodb+srv://BookHelp:booking@cluster0.ovb3i.mongodb.net/BookHelp?retryWrites=true&w=majority";

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const results = require('./results.js');


let db = mongoose.connect(mongoUri)
  .then(()=>{console.log('mongo mongo in da house in da house')})

let Results = mongoose.model('Results', results);

module.exports = { results: Results };

/*

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
