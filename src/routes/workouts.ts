import express from 'express'

import { CreateWorkoutRequest } from "../interfaces/workoutRequests";

import { createWorkout, getWorkouts } from "../services/workoutService";

const router = express.Router()

router.get('/', async(_req, res) => {
	try {
		const workouts = await getWorkouts()
		res.json(workouts)
	}
	catch (error) {
		res.status(500).json({'message':'Error fetching workouts'})
	}
})

router.post('/', async(req, res) => {
	
	// Extract user data from the request
	const user = 'testing'

	const workoutData: CreateWorkoutRequest = {
		... req.body, 
		'user': user
	}
	console.log("----------------------------")
	console.dir( workoutData )
	console.log("----------------------------")

	try {
		const workout = await createWorkout(workoutData)
		res.status(201).json(workout)
	}
	catch (error) {
		res.status(500).json( {message: 'Error creating workout'})
	}
})

export default router