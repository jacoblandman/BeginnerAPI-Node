import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({ config, db }) => {
  let api = Router();

  // specifying a version like 'v1' makes it easy to add a 'v2' without breaking 'v1'
  // 'v1/restaurant/add'
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {
      if (err) {
        // send error to client
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' });
    });
  });

  return api;
}
