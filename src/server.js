const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: 'Hello Rocketseat'});
});

app.get('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

app.post('/users', (req, res) => {
    return res.json({ 
        message: 'User created!',
        user: req.body
    });
});

app.listen(3333);