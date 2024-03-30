export type Exercise = {
	'name': string, 
	'type': 'Cardio' | 'Resistance',
	'mainMuscles': string[],
	'secondaryMuscles': string[] | null
}
