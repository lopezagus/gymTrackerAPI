import { Exercise } from "./exercise"

type ExerciseSet = {
	'reps': number, 
	'weight': number, 
	'holdTime': number,
}

type CardioSet = {
	'distance': number, 
	'duration':number
}

type WorkoutDetail = {
	'exercise': Exercise
	'sets': ExerciseSet[],
	'cardio': CardioSet[]
}

export type WorkoutDetails = {
	'exercises': WorkoutDetail[]
}
