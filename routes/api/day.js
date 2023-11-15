const express = require('express');
const router = express.Router();

const Day = require('../../schema/Day');



router.get('/getOrCreate', (req, res) => {
  //console.log(req.query.day)
    var query = {date: req.query.day},
    update = { day: req.query.day },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    Day.findOneAndUpdate(query,update,options
    , (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
      }})
  })
  
  router.put('/:id',(req, res, next) => {
    Day.findByIdAndUpdate(req.params.id, {
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
    const newDay = new Day(
      req.body
    );
    newDay.save()
    .then(day => res.json(day))
  
  })

  module.exports = router;