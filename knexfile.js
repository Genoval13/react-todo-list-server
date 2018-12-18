// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/react_todo_db'
  },

  production: {
    client: 'pg',
    connection: 'postgres://ijcuhdsljamfjj:8b871a053fa3b272a736431195f47cd7924d6a2a6e3cd872b146cc6b8cde9ea5@ec2-23-23-235-86.compute-1.amazonaws.com:5432/ddt9memp2phe6s'
  }

};
