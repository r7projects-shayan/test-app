// const app = require('express')()   // this is one way
require('dotenv').config();
const express = require('express');
const app = express(); // this is another way



app.get('/', (req, res) => {
    res.send('hello worlfddd')
})
app.get("/about", (req, res) => {
    res.send("<h2>Hello world this is about page</h2>");
})
app.listen(process.env.PORT || 3000)