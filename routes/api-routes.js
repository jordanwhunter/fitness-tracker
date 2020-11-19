// Dependencies
const router = require("express").Router();

const Workout = require("../models/workout.js");

// We need CRUD to manipulate schema requirements (POSTs, GETs, PUTs, DELETEs)

// Looking through api.js, stats.js and workout.js in the public folder, we establish endpoints of our API routes:
// "/api/workouts"

// "/api/workouts/range"

// "/api/workouts/:id"

// export