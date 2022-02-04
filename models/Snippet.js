// creating the db model
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
	title: String,
	body: String,
});

const Snippet = mongoose.model('Snippet', snippetSchema);

export default Snippet