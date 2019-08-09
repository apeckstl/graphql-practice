const express = require('express');
const app = express();
const router = require('./routes/router');

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(8081, () => {
});

