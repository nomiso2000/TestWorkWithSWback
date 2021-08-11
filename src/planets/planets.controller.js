const fetch = require('node-fetch');
const Joi = require('Joi');
const { encodingValues } = require('../utils/helpers');
class PlanetsController {
  async getPlanets(req, res, next) {
    try {
      const { id } = req.params;
      const result = await fetch(`https://swapi.dev/api/planets/${id}`);
      const data = await result.json();
      if (
        req.query.hasOwnProperty('encoding') &&
        req.query.encoding.includes('ewok')
      ) {
        res.json(encodingValues(data));
      } else {
        res.json(data);
      }
    } catch (e) {
      console.log('EROR', e);
    }
  }

  validatePlanetsParams(req, res, next) {
    const validateRules = Joi.object({
      id: Joi.number().required(),
      //   encoding: Joi.string(),
    });
    const validationResult = validateRules.validate({
      ...req.params,
      //   ...req.query,
    });
    if (validationResult.error) {
      return res.status(400).json(validationResult.error);
    }
    next();
  }
}

module.exports = new PlanetsController();
