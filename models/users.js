// get an instance of mongoose and mongoose.Schema
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: "Please supply an email address",
    unique: true,
    validate: [validator.isEmail, "Invalid Email Address"]
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("User", userSchema);
