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

app.get('/', (_req, res) => {
  knex.select().table('todo_list')
    .then((list) => {
      res.send(list);
    })
})

app.listen(PORT, () => {
  console.log('Yay, I am alive!');
})

module.exports = app;