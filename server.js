import express from 'express'
import './db/index.js'

const app = express()

import logger from 'morgan'
app.use(logger('dev'));

app.use(express.static('public'));

app.set('view engine', 'hbs')


import routes from './routes/index.js'
app.use('/', routes)

app.use((req, res) => res.render('404'))


// error handling
import errorHandler from './error-handling/index.js'
errorHandler(app)


app.listen(3000, () => console.log('server listening'))