const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://murugaskpm:Zs6AXHPtnUET5zHk@devtender.7zfhq.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;
