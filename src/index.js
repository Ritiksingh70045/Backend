// require('dotenv').config({path : './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

//! 1st Approach to connect with DB
import express from "express";
const app = express();

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
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db failed !!!" , err);
  process.exit(1);
})
