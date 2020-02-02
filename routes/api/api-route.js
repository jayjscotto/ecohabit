const router = require("express").Router();
const db = require('../../models');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

router.get('/get-coordinates/:zip', function(req, res) {  
  const key = process.env.REACT_APP_API_KEY;
  let zip = req.params.zip;
  axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${zip}&key=${key}`)
    .then(data => { 
      res.json(data.data.results);
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;



// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ecohabit";
// mongoose.Promise = require('bluebird');
// mongoose.connect(
//   MONGODB_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     promiseLibrary: require('bluebird')
//   }
// );

// router.get('/api/user/:id', function(req, res) {
//     let id = req.params.id;
//     console.log(id);
//     db.User.findOne({username: id})
//         .then(function(data) {
//             res.json(data);
//         })
// });