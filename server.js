// Global Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Establish PORT Connection
const PORT = 3000;
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static files to public folder
app.use(express.static("public"));

// Mongoose connect (workout database)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,  });

// Routes

// Initiate server
app.listen(PORT, () => {
  console.log(`Currently hosted on port ${PORT}!`);
});