### Express has an internal error handler for syncronous errors - errors in async code must be passed to next()

```js
app.get('/', (req, res, next) => {
	Promise.resolve()
		.then(() => {
			const error = new Error('sth went wrong')
			throw error
			res.render('index')
		})
	// .catch(err => next(err))
})
```
Without the next() in the .catch this crashes the app

### Add a middleware function with app.use() to demo that next() passes controll to the next middleware


### add a catch all 404 view
```js
app.use((req, res) => res.render('404'))
```

### setting the app to production mode: 

```bash
$ NODE_ENV=production node server.js
```
checking for the state of NODE_ENV
```js
app.get('env')
```


### custom error handler 
If you call next() with an error after you have started writing the response (for example, if you encounter an error while streaming the response to the client) the Express default error handler closes the connection and fails the request.

So when you add a custom error handler, you must delegate to the default Express error handler, when the headers have already been sent to the client:

```js
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
```

#### custom error handlers
```js
// custom error handlers
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

function logErrors(err, req, res, next) {
	console.error(err.stack)
	next(err)
}

function clientErrorHandler(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send({ error: 'Something failed!' })
	} else {
		next(err)
	}
}

function errorHandler(err, req, res, next) {
	res.status(500)
	res.render('error', { error: err })
}
```


### Add a logger

```js
import logger from 'morgan'
app.use(logger('dev'));
```