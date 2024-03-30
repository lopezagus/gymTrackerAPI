import { WorkoutDetails } from "../types/workout";


export interface CreateWorkoutRequest extends WorkoutDetails {
	'user': string
}
