// Dependencies
const router = require("express").Router();

// NPM install required for path
const path = require("path");

// Routes
// I want to be able to view create and track daily workouts
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

// Export
module.exports = router;