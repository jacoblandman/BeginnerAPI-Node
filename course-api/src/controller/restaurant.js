import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({ config, db }) => {
  let api = Router();

  // CRUD - Create Read Update Delete
  // specifying a version like 'v1' makes it easy to add a 'v2' without breaking 'v1'

  // 'v1/restaurant/add' - Create
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

  // '/v1/restaurant' - READ
  api.get('/', (req, res) => {
    // tell mongoose to find everything
    Restaurant.find({}, (err, restaurants) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  // 'v1/restaurant/:id' - Read 1
  api.get('/:id', (req, res) => {
    // tell mongoose to find by id
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // '/v1/restaurant/:id' - Update
  api.put('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      restaurant.name = req.body.name;

      restaurant.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Restaurant info updated'})
      });
    });
  });

  return api;
}
