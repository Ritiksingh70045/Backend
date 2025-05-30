// require('dotenv').config({path : './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

//! 1st Approach to connect with DB


// // IIFE used here
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Errror", (error) => {
//       console.log("Error : ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error : ", error);
//   }
// })();

//! 2nd Way
// import dotenv from "dotenv";
// dotenv.config({
//   path: "./.env",
// });
import express from "express";
import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db failed !!!", err);
    process.exit(1);
  });
