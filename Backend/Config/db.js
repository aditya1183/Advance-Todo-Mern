import mongoose, { connect } from "mongoose";

const connectdb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("db Connected ");
    });
  } catch (error) {
    console.log("error in db connection");
  }
};

export default connectdb;
