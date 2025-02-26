const express = require("express");
const router = express.Router();

const heistController = require("../controllers/heistController");
const crewController = require("../controllers/crewController");

// Add Heist API routes here
router.get("/heist", heistController.getHeist);
router.post("/heist", heistController.postHeist);

// Crew API routes
router.get("/crew", crewController.getCrew);
router.post("/crew", crewController.postCrew);

module.exports = router;
