require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const app = express();

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movieRouter');
const reviewRouter = require('./routes/reviewRouter');

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
// Set the secret using the SERVER_SECRET key stored in the .env file
app.set('server_secret', process.env.SERVER_SECRET);
// Allow app to create session for users using SERVER_SECRET key
app.use(session({
  secret: app.get('server_secret'),
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Handles http requests made from the Front-end server(React)
app.use(cors());

// Mounting Routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/movies', movieRouter);
app.use('/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send('Your server test is 200 OK');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}, in ${app.get('env')} mode.`);
});