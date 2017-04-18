import mongoose from 'mongoose';
import config from './config';

// callback is the parameter
// can be rewritten as export default function(callback){}
// exporting the mongo database connection so that we can use that in other files
export default callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db)
}
