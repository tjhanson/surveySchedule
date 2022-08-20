const express = require('express');
const router = express.Router();

const Site = require('../../schema/Site');

//@route   GET api/inspections
//@desc    Get all inspections
//@access  Public
router.get('/:name', (req, res) => {
    Site.find({
        name: req.params.name
       })
    .then(site => res.json(site[0]))
})

router.get('/', (req, res) => {
    Site.find()
    .then(site => res.json(site))
})
module.exports = router;