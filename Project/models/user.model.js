const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    forename: String,
    surname: String,
    email: String,
    phone: Number,
    password: String,
    confirmPassword: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;