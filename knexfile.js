// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/react_todo_db'
  },

  production: {
    client: 'pg',
    connection: 'https://git.heroku.com/carrie-and-bryan-todo.git'
  }

};
