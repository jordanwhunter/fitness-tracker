// Dependencies
const router = require("express").Router();

const Workout = require("../models/workout.js");

// We need CRUD to manipulate schema requirements (POSTs, GETs, PUTs, DELETEs). Looking through api.js, stats.js and workout.js in the public folder, we establish endpoints of our API routes:

// "/api/workouts"
// CREATEs new workout in the database
router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// READ - used by api.js to get the last workout
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
// READ - gets the range of workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkouts => {
    console.log(dbWorkouts)
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});

// "/api/workouts/:id"
// UPDATE - takes exercises from the body and updates specific workout according to schema setup
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // To turn on update validators, set the runValidators option for findByIdAndUpdate
    // For reference: https://mongoosejs.com/docs/validation.html
    { new: true, runValidators: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// export
module.exports = router;