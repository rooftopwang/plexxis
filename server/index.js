const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const employees = require('./data/employees.json');
var mongoose = require('mongoose');

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

// MongoDB - Mongoose
mongoose.connect('mongodb://localhost:27017/employees');
var personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
});
var Person = mongoose.model("Person", personSchema);


app.get('/api/employees', cors(corsOptions), (req, res, next) => {
  console.log('/api/employees');
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
})

app.post('/api/newuser', cors(corsOptions), (req, res, next)=>{
  const usr = req.body; 
  console.log(usr);
  res.send()
})

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))