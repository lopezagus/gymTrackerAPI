import dotenv from 'dotenv'

dotenv.config()

export const MONGO_URL = process.env.MONGODB_URI
export const PORT = process.env.PORT
 