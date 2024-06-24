import "dotenv/config";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `MonogDB connected! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(process.env.MONGODB_URI);
    console.log("this is erro ", error);
    process.exit(1);
  }
};

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});
export const Data = mongoose.model("People", dataSchema);

export default connectDB;
