// Imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;


// Instantiate server
const server = express();

// Body-Parser configurations
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Bonjour toi</h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
  console.log('Server en écoute !')
});