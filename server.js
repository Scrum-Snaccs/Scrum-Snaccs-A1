// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');

// connect to MongoDB atlas    mongodb+srv://BenHou:D2bNcqs12M9xvEAl@cluster0.8ugys.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://cluster0.8ugys.mongodb.net/', {
    dbName: 'snackdb',
    user: 'BenHou',
    pass: 'D2bNcqs12M9xvEAl',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Step 3


app.use(express.static('client/build'));



// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));