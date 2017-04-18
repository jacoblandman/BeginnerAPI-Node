import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default({ config, db }) => {
  let api = Router();

  // CRUD - Create Read Update Delete
  // specifying a version like 'v1' makes it easy to add a 'v2' without breaking 'v1'

  // 'v1/foodtruck/add' - CREATE
  api.post('/add', (req, res) => {
    let newFoodTruck = new FoodTruck();
    newFoodTruck.name = req.body.name;

    newFoodTruck.save(err => {
      if (err) {
        // send error to client
        res.send(err);
      }
      res.json({ message: 'Food Truck saved successfully' });
    });
  });

  // '/v1/foodtruck' - READ
  api.get('/', (req, res) => {
    // tell mongoose to find everything
    FoodTruck.find({}, (err, foodtrucks) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtrucks);
    });
  });

  // 'v1/foodtruck/:id' - READ 1
  api.get('/:id', (req, res) => {
    // tell mongoose to find by id
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtruck);
    });
  });

  // '/v1/foodtruck/:id' - UPDATE
  api.put('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      foodtruck.name = req.body.name;

      foodtruck.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Food Truck info updated'});
      });
    });
  });

  // '/v1/foodtruck/:id' - DELETE
  api.delete('/:id', (req, res) => {
    FoodTruck.remove({
      _id: req.params.id
    }, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Food Truck Successfully Removed!"});
    });
  });

  return api;
}
