const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { authenticate } = require('./middlewares');
const db = require('../database/dbConfig.js');
module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/users',getAll);
};

const jwtSecrect ='Why can’t banks keep secrets? There are too many tellers!';

function generateToken(user){
  const jwtpayload = {
    ...user,
    hello:'Welcome to Dad Jokes',
  };


  const jwtOptions= {
    expiresIn:'1m'
  }
  return jwt.sign(jwtpayload,jwtSecrect,jwtOptions)
}


function getAll(req,res){

  db('users')
  .select('id','username', 'password')
  .then(users =>{
    res.json(users);
  })
  .catch(err=>{
    res.send(err);
  })
}


function register(req, res) {
  const credentials =req.body
  const hash = bcrypt.hashSync(credentials.password,14);
  credentials.password = hash;
  db('users').insert(credentials)
  .then(ids=>{
    const id =id[0];
    const token = generateToken(credentials);
    res.status(201).json({welcome:credentials.username, token})
  })
  .catch(err=>{
      res.status(500).json(err);
  })
  // implement user registration
}

function login(req, res) {

  const credentials =req.body;
  db('users').where({username: credentials.username}).first()
.then(users=>{
  if(users&&bcrypt.compareSync(credentials.password,users.password)){
    const token = generateToken(users);
       res.status(200).json({welcome: users.username, token})
  }else {
      res.status(401).json({
        message:'Invaild Entry'
      })
    }
  })
  .catch(err=>{
    res.send(err)
  });

}


  // implement user login


function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
