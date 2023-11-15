const express = require('express');
const router = express.Router();

const SurveyRequest = require('../../schema/SurveyRequest');

const calcWholeDay = (d) => {
  const date = new Date(d)
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return({low:new Date(year,month,day,0,0),high:new Date(year,month,day,23,59)})
}


router.get('/byDate', (req, res) => {
    console.log(req.query)
    const range = calcWholeDay(req.query.day)
    SurveyRequest.find({
      scheduledDate: {
        $gte: range.low,
        $lt: range.high
      }
       })
    .then(site => res.json(site))
})

router.get('/', (req, res) => {
  SurveyRequest.find({
    scheduledDate: null
  })
    .then(reqs => res.json(reqs))
})

router.put('/:id',(req, res, next) => {
  SurveyRequest.findByIdAndUpdate(req.params.id, {
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
  const newReq = new SurveyRequest(
    req.body
  );
  newReq.save()
  .then(request => res.json(request))

})

module.exports = router;