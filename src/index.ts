import express from 'express'

import connectDB from './database/database'

import exerciseRouter from './routes/exercises'
import workoutRouter from './routes/workouts'

import { PORT } from './config/config'

const app = express()

app.use(express.json())

app.use('/exercise', exerciseRouter)
app.use('/workout', workoutRouter)

connectDB().then(() => {

	app.listen(PORT, () => {
		console.log('Server started on PORT: ' + PORT)
	})

}).catch((error: Error) => {
	
	console.log('Error initializing database connection ', error)
	process.exit(1);

})

