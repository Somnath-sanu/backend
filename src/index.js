// require('dotenv').config({path : './env'});
//! telling that .env is in root directory in path

import dotenv from "dotenv";

// import mongoose from "mongoose";

// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";



dotenv.config({
  path: "./env",
});

connectDB();

/**
 * 
 
// ! IIFE (Immediately Invoked Function Expression)
// ! better practice to use semi-colon brfore IIFE

// ! function connectDB(){} ; connectDB(); 
// ! instead that we can use IIFE

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`); //! Await Keyword

    app.on("error", (error) => {
      console.error("ERROR :", error);
      throw error;
    });

    app.listen(process.env.PORT , ()=>{
        console.log(`App is Listening on ${process.env.PORT}`);
    })


  } catch (error) {
    console.error("ERROR :", error);
    throw error;
  }

})();

/**
 * ! !The express().on() method is used to attach an event listener to an Express application.
 * ! The event listener will be called whenever the specified event is emitted by the application.
 * !The first argument to the on() method is the name of the event to listen for.
 * ! The second argument is the callback function that will be called when the event is emitted.
 * ! The callback function can take any number of arguments, 
 * ! but the first argument will always be the   !event object.
 *
 *

*/
