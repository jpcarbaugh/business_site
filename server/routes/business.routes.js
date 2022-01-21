const businessController = require('../controllers/business.controller');

module.exports = app => {
    app.get('/api/healthcheck', businessController.healthCheck);
    app.get('/api/service', businessController.getAllServices);
    app.post('/api/service', businessController.createService);
    app.get('/api/service/:id', businessController.getOneService);
    app.put('/api/service/:id', businessController.updateService);
    app.delete('/api/service/:id', businessController.deleteService);
}