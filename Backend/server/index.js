const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const googleTrends = require('google-trends-api');
const cors = require('cors');
const router = require('./router.js');

const port = process.env.PORT || 3002;
const server = express();

server.use(bodyParser.json());
server.use(cors());

// CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  next();
});

// remove this before deployment
//server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../../FrontEnd/dist/')));
server.use('/', router);

// Serve up the site for react routes
function returnSite (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../../FrontEnd/dist/') })
}

// React Router returns
server.get('/', returnSite);
server.get('/feed', returnSite);
server.get('/post', returnSite);

server.listen(port, () => (console.log(`we're in boys`)));