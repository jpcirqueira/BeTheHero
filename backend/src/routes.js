const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

routes.post('/ongs', (Request, Response) => {
    const {name, email, whatssap, city, uf} = Request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    return Response.json();
});

module.exports = routes;