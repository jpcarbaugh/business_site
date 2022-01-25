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
        type: String,
        required: [true, "Length of time is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;