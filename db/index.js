import mongoose from 'mongoose'
import 'dotenv/config'

const mongoURI = process.env.MONGOOSE_URI || 'mongodb://127.0.0.1:27017/express-boilerplate'
try {
	const db = await mongoose.connect(mongoURI)
	console.log(`Connected to database ${db.connections[0].name}`)
} catch (err) {
	console.log(`Error while creating connection ${err}`)
}