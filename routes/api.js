const express = require('express');
const api = express.Router();

// import common variable
const {db, checkParam, readDB} = require('../common.js');

// ID count for making ID
var IDcount;
db.get("ID_COUNT").then(value => {IDcount = parseInt(value)});


// create new user
api.post('/newUser', async(req, res) =>{
  // required parameter
  const param = {
    name:req.query.name,
    password:req.query.password
  }
  if(!checkParam(param,res)) return;
  // create ID
  IDcount++;
	db.set('ID_COUNT',IDcount);
	// create user
	const user = {
		ID:IDcount,
		Name:param.name,
		Password:param.password,
	}
	db.set(`user:${IDcount}`, user);
	console.log(await db.get(`user:${IDcount}`));
	res.status(201).json({'id':IDcount});
})

api.get('/tes', (req, res) => {
  res.json({'hello':'world'})
})

module.exports = api;