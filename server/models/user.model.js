const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be a minimum of 8 characters"]
    },
    
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) => {
        this.password = hash
        next()
    })
    .catch(err => {
        console.log(err);
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;