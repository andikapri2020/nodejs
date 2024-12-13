'use strict';
require('newrelic');

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

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
