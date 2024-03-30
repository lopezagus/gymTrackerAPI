import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
	'name': { type: String, required: true},
	'type': { type: String, required: true}, // 'Resistance' | 'Cardio'
	'mainMuscles': { type: Array, required: true},
	'secondaryMuscles': { type: Array }
})

export const ExerciseModel = mongoose.model('Exercise', ExerciseSchema)
