// import { logErrors, clientErrorHandler, errorHandler } from './error-handling/index.js'
import express from 'express'
import './db/index.js'


const app = express()

import logger from 'morgan'
app.use(logger('dev'));

app.use(express.static('public'));

app.set('view engine', 'hbs')
// app.use((req, res) => res.render('404'))


// routes
import routes from './routes/index.js'

app.use('/', routes)

// custom error handlers
// app.use(logErrors)
// app.use(clientErrorHandler)
// app.use(errorHandler)

// error handling
import errorHandler from './error-handling/index.js'
errorHandler(app)


app.listen(3000, () => console.log('server listening'))