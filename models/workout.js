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
    exercises: [{
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
    }]
  },
  {
    // For reference on virtuals with json: https://mongoosejs.com/docs/2.7.x/docs/virtuals.html - when data is called, this will include any virtual properties
    toJSON: {
      virtuals: true
    }
  }
);

// Export
const Workout = mongoose.model("Workout", schemaForWorkouts);

module.exports = Workout;