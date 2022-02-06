import express from 'express'
import Snippet from '../models/Snippet.js'
const router = express.Router()

router.get('/', (req, res, next) => {
	res.render('index.hbs')
})

export default router