const express = require('express');
const planetsRouter = express.Router();
const planetController = require('./planets.controller');

planetsRouter.get(
  '/:id',
  planetController.validatePlanetsParams,
  planetController.getPlanets
);
module.exports = planetsRouter;
