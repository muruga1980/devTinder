const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
