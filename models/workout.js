// Dependencies
const mongoose = require("mongoose");

// Constructor
const Schema = mongoose.Schema;

// Establish schemaForWorkouts
// Set up guidelines for schema
const schemaForWorkouts = new Schema (
  {
    // I want to be able to log multiple exercises in a workout on a given day {object}.
    day: {
      type: Date,
      default: () => new Date()
    },
    // I should also be able to track the name, type, weight, sets, reps, and duration of exercise [array].
    // name
    name: {
      type: String
    },

    // type
    type: {
      type: String
    },

    // weight
    weight: {
      type: Number
    },

    // sets
    sets: {
      type: Number
    },

    // reps
    reps: {
      type: Number
    },

    // duration
    duration: {
      type: Number
    },

    // If the exercise is a cardio exercise, I should be able to track my distance traveled.  
  }
);

// Export
const Workout = mongoose.model("Workout", schemaForWorkouts);

module.exports = Workout;