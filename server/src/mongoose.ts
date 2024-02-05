import mongoose from "mongoose";

export const initMongoose = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/quiz");

  return mongoose;
};
