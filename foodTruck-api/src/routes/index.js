import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';

let router = express();

// connect to db
// the initializeDb object contains just a function, that needs a function as a param
// this is the 'callback', which takes the db as an argument
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  // foodtruck is a controller similar to a view controller
  router.use('/foodtruck', foodtruck({ config, db }));
  router.use('/account', account({ config, db }));

});

export default router;
