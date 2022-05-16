// !WARNING common.js cannot import other file
// Its only used to distribute common variable

// initialize database
const Database = require("@replit/database");
const db = new Database();

// Export all variable
module.exports = { db }