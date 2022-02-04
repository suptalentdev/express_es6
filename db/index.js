import mongoose from 'mongoose'
import 'dotenv/config'

const mongoURI = process.env.MONGOOSE_URI
try {
	await mongoose.connect(mongoURI)
} catch (err) {
	console.log(`Error while creating connection ${err}`)
}