const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ecohabit';
mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	promiseLibrary: require('bluebird')
});

router.get('/api/user/:id', function(req, res) {
	let id = req.params.id;
	console.log(id);
	db.User.findOne({ _id: id }).then(function(data) {
		res.json(data);
	});
});
