const Business = require("../models/business.model");
const jwt = require("jsonwebtoken");

const healthCheck = (req, res) => {
    res.send("Controller good to go")
};

const createService = async (req, res) => {
    //create the service
    const { body } = req;
    let newService = new Business(body);
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
    console.log(decodedJwt);
    newService.user_id = decodedJwt.payload.id;
    console.log("new service: ", newService);

    try {
        newService = await newService.save();
        res.json(newService);
    } catch (err) {
        res.status(400).json(err);
    }
}

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

// const updateService = async (req, res) => {
//     const { params } = req;
//     let serviceQuery;
//     const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
//     serviceQuery.user_id = decodedJwt.payload.id;
//     try {
//         serviceQuery = await Business.findOneAndUpdate({_id: params.id}, req.body, {new: true, runValidators: true});
//         res.json(serviceQuery);
//     } catch (err) {
//         res.status(400).json(err)
//     }
// };

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