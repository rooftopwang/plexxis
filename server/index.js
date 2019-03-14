const express = require('express')
const cors = require('cors')
const app = express()
const employees = require('./data/employees.json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employees');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.get('/api/employees', cors(corsOptions), (req, res, next) => {
  console.log('/api/employees');
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
})

app.post('/api/newuser', cors(corsOptions), (req, res, next)=>{
  const usr = req.body; 
  console.log(usr);

})

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))