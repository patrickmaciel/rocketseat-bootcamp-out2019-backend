const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

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

routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;