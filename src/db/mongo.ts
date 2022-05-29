const mongoose = require("mongoose");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err: any) => {
  console.log(err);
});

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

async function disconnectMongo() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

export { connectMongo, disconnectMongo };
