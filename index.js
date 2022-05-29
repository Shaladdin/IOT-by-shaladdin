const express = require('express');
const server = express();

// import common variable
const {db} = require('./common.js');

// start the serverControll
const serverControll = require('./serverControll.js');
serverControll.init();

// import route from routes/api
const api = require('./routes/api')

// use the route
server.use('/api', api);
// Make index.html as default homepage and stuff
server.use(express.static('./public/html'));

// start the server
server.listen(3000,()=>console.log('server reloaded'));