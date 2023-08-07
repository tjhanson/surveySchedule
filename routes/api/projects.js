const express = require('express');
const router = express.Router();

const Project = require('../../schema/Project');


router.get('/bylist', (req, res) => {
    
    var names = req.query.projects.split(',')
    console.log(names)
    Project.find({
        name: {$in:names}
       })
    .then(site => res.json(site))
})

router.get('/', (req, res) => {
    Project.find()
    .then(site => res.json(site))
})

router.put('/:id',(req, res, next) => {
    Project.findByIdAndUpdate(req.params.id, {
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
  const newProject = new Project(
    req.body
  );
  newProject.save()
  .then(project => res.json(project))

})

module.exports = router;