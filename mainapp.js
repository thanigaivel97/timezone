const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const routetime = require('./routes/timestamp');


//var currentTimeInSeconds = Math.floor(Date.now() / 1000);

//var currentTimeInMilliseconds = Date.now();

//console.log(currentTimeInMilliseconds);

//console.log(currentTimeInSeconds);



const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/time', routetime);

mongoose.connect('mongodb+srv://hello:hello@cluster0-acgtj.mongodb.net/hello?retryWrites=true&w=majority').then(rs => {
    app.listen(8080);
}).catch(err => {

});