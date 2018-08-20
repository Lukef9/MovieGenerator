const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const movieRouter = require('./routes/movieRouter');
// const reviewRouter = require('./routes/reviewRouter');

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handles http requests made from the Front-end server(React)
app.use(cors());

app.use('/movies', movieRouter);
// app.use('/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send('Your server test is 200 OK');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}, in ${app.get('env')} mode.`);
});
