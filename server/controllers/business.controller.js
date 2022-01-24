const Business = require("../models/business.model");

const healthCheck = (req, res) => {
    res.send("Controller good to go")
};

const createService = (req, res) => {
    const { body } = req;
    Business.create(body)
    .then((newService) => res.json(newService))
    .catch(err => res.status(400).json(err));
};

const getAllServices = (req, res) => {
    Business.find()
    .then((allServices) => res.json(allServices))
    .catch(err => res.status(400).json(err));
};

const getOneService = (req, res) => {
    const { params } = req;
    Business.findOne({_id: params.id})
    .then((oneService) => res.json(oneService))
    .catch(err => res.status(400).json(err));
};

const updateService = (req, res) => {
    const { params } = req;
    Business.findOneAndUpdate({_id: params.id}, req.body, {new: true, runValidators: true})
    .then((updatedService) => res.json(updatedService))
    .catch(err => res.status(400).json(err));
};

const deleteService = (req, res) => {
    const { params } = req;
    Business.deleteOne({_id: params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports = {
    healthCheck,
    createService,
    getAllServices,
    getOneService,
    updateService,
    deleteService
}