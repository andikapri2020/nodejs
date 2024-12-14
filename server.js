require('newrelic');

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const winston = require('winston');


//logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

logger.info('Info message');
logger.error('Error message');
logger.warn('Warning message');


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/list', (req, res) => {
  res.send('list page from argocd');
});

app.get('/view', (req, res) => {
  res.send('view page from argocd');
});

app.get('/app', (req, res) => {
  res.send('app page from argocd');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
