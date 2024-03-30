import express from 'express'

import { CreateExerciseRequest } from '../interfaces/exerciseRequests'

import { createExercise, getExercises } from '../services/exerciseService'

const router = express.Router()

router.get('/', async (_req, res) => {
	try {
		const exercises = await getExercises()
		res.json(exercises)
	}
	catch (error) {
		res.status(500).json({'message':'Error fetching exercises'})
	}
})

router.post('/', async (req, res) => {
	
	const exerciseData: CreateExerciseRequest = req.body
	if (!exerciseData.name || !exerciseData.type || !exerciseData.mainMuscles) {
		res.status(400).json({ message: 'Missing required parameters'})
	}

	try {
		const exercise = await createExercise(exerciseData)
		res.status(201).json(exercise)
	}
	catch (error) {
		res.status(500).json({ message: 'Error creating exercise'})
	}
})

export default router
