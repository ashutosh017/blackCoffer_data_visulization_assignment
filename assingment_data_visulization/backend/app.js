// using mongodb package

import "dotenv/config";
import { MongoClient } from "mongodb";
import express from "express";
const app = express();
const port = 3000;
const client = new MongoClient(`${process.env.MONGODB_URI}`);
const db = client.db("Blackcoffer");
const coll = db.collection("data");
app.listen(port, () => {
  console.log("server is running on port: ", port);
});

const Data = await findDocuments();

app.get("/api/data", (req, res) => {
  if (req.query.country) {
    const filterdData = Data.filter((d) =>
      d.country.includes(req.query.country)
    );
    res.send(filterdData);
    return;
  }
  res.send(Data);
});

async function run() {
  try {
    await client.connect();
    console.log("Client Connected");
  } catch (err) {
    console.log(err);
  }
}
run();

export async function findDocuments() {
  const lists = await coll.find().toArray();
  return lists;
}

// console.log(res);

// using mongoose

// import "dotenv/config";

// import mongoose from "mongoose";
// import data from "./model/data.js";

// mongoose.connect(`${process.env.MONGODB_URI}`);

// const x = await data.find({});
// console.log(x);
