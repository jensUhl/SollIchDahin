const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config/database');
const users = require('./routes/users');
const modules = require('./routes/modules');
const userModules = require('./routes/UserModules');

//Connect to database
mongoose.connect(config.database);
//When connected to database
mongoose.connection.on('connected', () => {
    console.log(`Connected to database ${config.database}`);
});
//When error
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`);
});


const app = express();

//port number
const PORT = 3000;

//Cors Middleware
app.use(cors());

//Bodyparser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users)
app.use('/modules', modules)
app.use('/userModules', userModules)

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})