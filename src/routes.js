const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: 'Hello Rocketseat'});
});

routes.get('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

routes.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

routes.post('/users', (req, res) => {
    return res.json({ 
        message: 'User created!',
        user: req.body
    });
});

module.exports = routes;