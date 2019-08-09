const express = require('express');
const app = express();
const router = require('./routes/router');
const cookieParser = require('cookie-parser');

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = app.listen(8081, () => {
});

