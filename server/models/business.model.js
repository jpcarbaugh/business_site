const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    timeLength: {
        type: Number,
        required: [true, "Length of time is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    }
})

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;