const { Router } = require('express');
const ReviewerSchema = require('../models/ReviewersSchema');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { 
      name,
      company
    } = req.body;
    ReviewerSchema
      .create({ name, company })
      .then(results => res.send(results))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    ReviewerSchema
      .find()
      .lean()
      .select({ __v: false })
      .then(results => res.send(results))
      .catch(next);
  });
