import express from 'express'
import './db/index.js'

const app = express()

const port = process.env.PORT || 3000

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


app.listen(port, () => console.log(`Server listening on port ${port}`))