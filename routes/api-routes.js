// Dependencies
const router = require("express").Router();

const Workout = require("../models/workout.js");

// We need CRUD to manipulate schema requirements (POSTs, GETs, PUTs, DELETEs). Looking through api.js, stats.js and workout.js in the public folder, we establish endpoints of our API routes:

// "/api/workouts"
// CREATE
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// READ
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE
// For reference: https://mongoosejs.com/docs/api.html
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

// "/api/workouts/range"

// "/api/workouts/:id"

// export