import express from 'express'
import './db/index.js'

const app = express()

const port = process.env.PORT || 3000

import logger from 'morgan'
app.use(logger('dev'));


import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// normalizes path to the views folder
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'hbs')
// register public folder
app.use(express.static(path.join(__dirname, '..', 'public')))


import cookieParser from 'cookie-parser'
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

import routes from './routes/index.js'
app.use('/', routes)

app.use((req, res) => res.render('404'))


// error handling
import errorHandler from './error-handling/index.js'
errorHandler(app)


app.listen(port, () => console.log(`Server listening on port ${port}`))