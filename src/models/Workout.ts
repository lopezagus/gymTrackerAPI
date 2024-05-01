import mongoose from 'mongoose';

const WorkoutExerciseSchema = new mongoose.Schema({
	'name': String, 
	'type': String,
	'mainMuscles': [String],
	'secondaryMuscles': { type: Array }
})

const SetSchema = new mongoose.Schema({
	'reps': Number,
	'weight': Number,
	'holdTime': Number,
	'distance': {'distance': Number, 'unit': String},
	'time': Number
})

const WorkoutSchema = new mongoose.Schema({
	'user': { type: String, required: true},
	'date': { type: Date, default: Date.now},
	'exercises': [
		{
			'exercise': WorkoutExerciseSchema,
			'sets': [SetSchema]
		}
	]
})

export const WorkoutModel = mongoose.model('Workout', WorkoutSchema)
