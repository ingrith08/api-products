const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();
const router = require('./app/routes');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router);

app.listen(config.PORT, () => {
    console.log('http://localhost:' + config.PORT)
})