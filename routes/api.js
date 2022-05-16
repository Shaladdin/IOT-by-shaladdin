const express = require('express');
const api = express.Router();

// import common variable
const {db} = require('../common.js');

// api.post('newUser', (req, res) =>{
//   console.log(req);
//   res
// })

api.get('/tes', (req, res) => {
  res.json({'hello':'world'})
})

module.exports = api;