// Global Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Establish PORT Connection
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static files to public folder
app.use(express.static("public"));

// Mongoose connect (workout database)
// https://mongoosejs.com/docs/deprecations.html
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false }); // Following initial setup in seed.js

// Routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"))

// Initiate server
app.listen(PORT, () => {
  console.log(`Currently hosted on port ${PORT}!`);
});