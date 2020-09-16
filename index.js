'use strict';
const serverModule = require('./lib/server.js');
require('dotenv').config();
let port =process.env.PORT;
serverModule.start(port);
