const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('./knex');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000; 

const app = express();

app.use(morgan()); 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.disable('x-powered-by'); 

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (_req, res) => {
  knex.select().table('todo_list')
    .then((list) => {
      res.send(list);
    })
})

app.post('/post', (req, res) => {
  knex('todo_list')
  .insert({
    name: req.body.name,
    complete: req.body.complete
  }, '*')
  .catch((err) => {
    next(err);
  })
  res.send(req.body);
})

app.listen(PORT, () => {
  console.log('Yay, I am alive!');
})

module.exports = app;