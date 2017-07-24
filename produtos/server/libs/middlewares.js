let bodyParser = require('body-parser'),
    express = require('express');

module.exports = app => {
    app.set('port', process.env.PORT || 8000);
    app.use(bodyParser.json());
    app.use(express.static('public'));
}