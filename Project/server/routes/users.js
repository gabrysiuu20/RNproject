import { Register } from "../../src/register.js";

import { Router } from "express";
var router = Router();
import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://Gaborinho:razerPapier3z@cluster0.li8q53j.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("RNproject");
    const coll = db.collection("Users");
    // find code goes here
    let user = [
      {fullName: `${Register.fullName}`, email: `${Register.email}`, phone: `${Register.phone}`, password: `${Register.password}`, confirmPassword: `${Register.confirmPassword}`}
    ];
    // iterate code goes here
    let result = await coll.insertOne(user);

    console.log(result.insertedId);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




export default router;