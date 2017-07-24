var express = require('express'),
    consign = require('consign'),
    app = express();


consign({
        verbose: true
    })
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);