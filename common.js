// !WARNING common.js cannot import other file
// Its only used to distribute common variable

// initialize database
const Database = require("@replit/database");
const db = new Database();

// install other dipendencies or something
const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');

// check required parameter
function checkParam(param, res) {
	for (const key of Object.keys(param))
		if (param[key] === undefined) {
			res.status(422).json({ 'error': `missing parameter: ${key}` });
			res.end();
			return false;
		}
	return true;
}

// read database
function readDB(key) {
	return new Promise(res => {
		db.get(key).then(value => { res(value) });
	})
}

// make promt less "buggy"
function ask(question){
	console.log(question);
	return prompt('');
}

// Export all variable
module.exports = { db, checkParam, readDB, style: chalk, ask}