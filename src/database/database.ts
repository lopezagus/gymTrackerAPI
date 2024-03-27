import mongoose from "mongoose";

import { MONGO_URL } from "../config/config";

const connectDB = () => {
	return new Promise<void>((resolve, reject) => {
		mongoose.Promise = Promise

		mongoose.connect(MONGO_URL!).then(() =>{

			console.log('MongoDB connection succesfully established.')
			resolve()

		}).catch((error: Error)=> {

			console.log('MongoDB connection error: ', error)
			reject(error)
			
		})
	})
}

export default connectDB