import { ExerciseModel } from '../models/Exercise'
import { CreateExerciseRequest } from '../interfaces/exerciseRequests'

export const getExercises = async () => {
	try {
		const exercises = ExerciseModel.find().exec()
		return exercises
	} 
	catch (error) {
		console.log('Error while reading exercises: ', error)
		throw error
	}
}

export const createExercise = async (exerciseData: CreateExerciseRequest) => {

	const exercise = new ExerciseModel(exerciseData)

	try {
		await exercise.save()
		return exercise
	} 
	catch (error) {
		console.log('Error while saving the exercise:', error)
		throw error
	}
}