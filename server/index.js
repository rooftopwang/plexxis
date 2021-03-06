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
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE, OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}

// MongoDB - Mongoose
mongoose.connect('mongodb://localhost:27017/employees');
const userSchema = mongoose.Schema({
  name: String, 
  code: String,
  profession: String,
  color: String,
  city: String,
  branch: String,
  assigned: Boolean
});
const User = mongoose.model("User", userSchema);


app.options('/api/employees/:id', cors(corsOptions)) 

app.get('/api/employees', cors(corsOptions), (req, res, next) => {

  User.find(function(err, response){
    res.json(response);
  })
})

app.post('/api/newuser', cors(corsOptions), (req, res, next)=>{
  const user_json = Object.keys(req.body)[0];
  const usr = JSON.parse(user_json); 

  const newUser = new User({
    name: usr.name, 
    code: usr.code,
    profession: usr.profession,
    color: usr.color,
    city: usr.city,
    branch: usr.branch,
    assigned: usr.assigned
  });
  return newUser.save(function(err, result){
    res.send("user added")
  })
})
app.options('/api/delete/:id', cors(corsOptions)) 
app.del('/api/delete/:id', cors(corsOptions), function(req, res, next){
  User.findByIdAndRemove(req.params.id, function(err, response){
     if(err) res.json({message: "Error in deleting record id " + req.params.id});
     else res.json({message: "User with id " + req.params.id + " removed."});
  });
});

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))