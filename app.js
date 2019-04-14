const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// connection to MongoDB
mongoose.connect(config.database, {useNewUrlParser: true});
// on connection
mongoose.connection.on('connected', () => {
    console.log('connnected to DB ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('error while connecting DB ', err);
});

// Initialise server
const app = express();

const usersRouter = require('./routes/users');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server started on ' + PORT);
});

// enable corss-origin request
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parser middle ware
app.use(bodyParser.json());

app.use('/users', usersRouter);