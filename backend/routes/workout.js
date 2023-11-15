const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/get', getWorkouts)

// GET a single workout
router.get('/get/:_id', getWorkout)

// POST a new workout
router.post('/create', createWorkout)

// DELETE a workout
router.delete('/del/:_id', deleteWorkout)

// UPDATE a workout
router.patch('/update', updateWorkout)

module.exports = router