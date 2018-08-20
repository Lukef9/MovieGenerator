const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Your server test is 200 OK');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}, in ${app.get('env')} mode.`);
});