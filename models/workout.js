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
    // For reference on virtuals with json: https://mongoosejs.com/docs/2.7.x/docs/virtuals.html - when data is called, this will include any virtual properties.
    // The toJSON() method converts a Date object into a string, formatted as a JSON date. For reference: https://www.w3schools.com/jsref/jsref_tojson.asp
    toJSON: {
      virtuals: true
    }
  }
);

// dynamic schema referencing totalDuration which is found in the workout.js file contained in the public folder
schemaForWorkouts.virtual("totalDuration").get(function () {
  // cannot use arrow function on account of the .this property referencing exercises
  // reduce() to handle limiting the array of exercises down to their duration totals
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

// Export
const Workout = mongoose.model("Workout", schemaForWorkouts);

module.exports = Workout;