const Workout = require('../model/Workout')
const mongoose = require('mongoose')
const bodyparser=require('body-parser');

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {

  const id = req.params._id;
  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  //const {title, load, sets} = req.body

  // add to the database
  try {
    const olusturma = await Workout.create(req.body)
    res.status(200).json({message: "oluşturma başarılı"})

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const id = req.params._id

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const _id = req.body._id

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: _id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}