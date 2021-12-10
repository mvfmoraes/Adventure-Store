const express = require('express');
const app = express();
const consign = require('consign');

consign()
    .include('./config/middleware.js')
    .then('./helpers')
    .then('./services')
    .then('./routes')
    .into(app);

app.db = require('./config/database');

let PORTA = process.env.PORT || 3030;
app.listen(PORTA, () => console.log(`Tudo certo para usar! (http://localhost:${PORTA}/)`));

module.exports = app;

