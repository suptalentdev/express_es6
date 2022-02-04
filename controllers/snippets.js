import Snippet from '../models/Snippet.js'

const getAllSnippets = async (req, res, next) => {
	try {
		const snippets = await Snippet.find()
		res.render('snippets/index.hbs', { snippets })
	} catch (err) {
		next(err)
	}
}

const getSnippet = async (req, res, next) => {
	const id = req.params.id
	try {
		const snippet = await Snippet.findById(id)
		res.render('snippets/show.hbs', { snippet })
	} catch (err) {
		next(err)
	}
}

export default { getAllSnippets, getSnippet }