import mongoose from 'mongoose'
import 'dotenv/config'

const mongoURI = process.env.MONGOOSE_URI
try {
	const db = await mongoose.connect(mongoURI)
	console.log(db.connections[0].name)
} catch (err) {
	console.log(`Error while creating connection ${err}`)
}