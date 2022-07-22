import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import shoesRoute from './routes/Shoes.routes.js';
import { errorHandler, notFound } from './Middleware/Error.js';

//const cors = require("cors");
//var mysql = require('mysql');
dotenv.config();
connectDatabase();
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/shoes", shoesRoute)

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});