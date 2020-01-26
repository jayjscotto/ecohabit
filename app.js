var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var survey = require('./routes/survey');
var auth = require('./routes/auth');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose
	.connect('mongodb://localhost/randomDB', { promiseLibrary: require('bluebird') })
	.then(() => console.log('connection success'))
	.catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/survey', survey);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
