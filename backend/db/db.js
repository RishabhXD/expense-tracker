const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Working");
  } catch (error) {
    console.error(error);
  }
};


module.exports = {db}