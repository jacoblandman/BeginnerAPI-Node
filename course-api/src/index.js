// main application file
import http from 'http';
import express from 'express';
// allow us to parse our json
import bodyParser from 'body-parser';
// interface with mongodb in an elegant way
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

//  middleware - lets us intercept our request and do an operation with it
// parse application/json
app.use(bodyParser.json({
  // limit the size of data that can be passed in
  limit: config.bodyLimit
}));


// passport config


// api routes v1
// anything coming to our url/v1 will go to routes
app.use('/v1', routes);

// we specify the port in the config file
app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

// if anyone/thing imports our app.js file, then they will get the app object
export default app;
