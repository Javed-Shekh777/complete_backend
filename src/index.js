// import dotenv from 'dotenv';
// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from './constants.js';
// dotenv.config();



// const app = express();

// // ;(async () => {})();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    
//     app.on("error", (error) => {
//       console.log("Error ", error);
//       throw error;
//     });

    
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error : ", error);
//     throw error;
//   }
// })();



// =========================================================================================
// =========================================================================================

import dotenv from 'dotenv';
import connectDB from "./db/db.js";
dotenv.config({path:'./env'});
connectDB();



