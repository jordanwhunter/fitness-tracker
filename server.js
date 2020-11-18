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

// MongoDB Atlas connect

// Routes

// Initiate server