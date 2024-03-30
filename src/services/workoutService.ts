import { WorkoutModel } from "../models/Workout";
import { CreateWorkoutRequest } from "../interfaces/workoutRequests";

export const getWorkouts = async () => {
	try {
		const workouts = WorkoutModel.find().exec()
		return workouts
	}
	catch (error) {
		console.log('Error while reading workouts: ', error)
		throw error
	}
}

export const createWorkout = async (workoutData: CreateWorkoutRequest) => {

	const workout = new WorkoutModel(workoutData)

	try{
		await workout.save()
		return workout
	}
	catch (error) {
		console.log('Error while saving the workout', error)
		throw error
	}
}