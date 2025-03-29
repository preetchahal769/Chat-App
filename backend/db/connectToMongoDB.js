import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error while connecting to MongoDb : ${error}`);
    console.log(error);
  }
};

export default connectToDB;
