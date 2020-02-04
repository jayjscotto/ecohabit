const router = require('express').Router();
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
