const router = require("express").Router();
const UserController = require("../../controller/UserController");
const db = require('../models');
const mongoose = require('mongoose');

router.get('/api/user/:id', function(req, res) {
    let id = req.params.id;
    db.User.findOne({id})
        .then(function(data) {
            res.json(data);
        })
})