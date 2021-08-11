const express = require('express');
const peopleController = require('./people.controller');
const peopleRouter = express.Router();

peopleRouter.get(
  '/:id',
  peopleController.validatePeopleParams,
  peopleController.getPeople
);

module.exports = peopleRouter;
