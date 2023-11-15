const express = require('express');
const router = express.Router();

const Surveyor = require('../../schema/Surveyor');



router.get('/', (req, res) => {
    Surveyor.find()
      .then(surveyors => res.json(surveyors))
  })
  
  router.put('/:id',(req, res, next) => {
    Surveyor.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
        }
      })
  })
  
  router.post('/', (req, res) => {
    console.log(req.body)
    const newSurveyor = new Surveyor(
      req.body
    );
    newSurveyor.save()
    .then(surveyor => res.json(surveyor))
  
  })

  module.exports = router;