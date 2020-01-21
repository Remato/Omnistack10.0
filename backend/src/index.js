const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://username:<password>@cluster0-fxiv5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //setando json para o express, tem q vir antes de tudo pra poder interpretar JSON
app.use(routes);


app.listen(3333);

