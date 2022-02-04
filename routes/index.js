import express from 'express'
import Snippet from '../models/Snippet.js'
const router = express.Router()
import controller from '../controllers/snippets.js'

router.get('/', controller.getAllSnippets)
router.get('/:id', controller.getSnippet)
// router.get('/', async (req, res, next) => {
// 	// get all snippets from the db
// 	try {
// 		const snippets = await Snippet.find()
// 		res.render('snippets/index.hbs', { snippets })
// 	} catch (err) {
// 		next(err)
// 	}
// })

export default router