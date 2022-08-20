const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

const sites = require('./routes/api/sites');

const app = express();
//bodyparser middleware
app.use(bodyParser.json({limit: '20mb'}));

//mongoose
const url = "mongodb://localhost:27017/costcoECP";
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log('connected to mongo db server')
},(err)=> {console.log(err);})


//app.use('/sites',sites)


const port =  process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))