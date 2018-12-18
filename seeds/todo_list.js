
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo_list').insert([
        {
          name: 'Mow Lawn',
          complete: false
        }, {
          name: 'Clean room',
          complete: true
        }, {
          name: 'Wash dishes',
          complete: false
        }, {
          name: 'Make a pie',
          complete: false
        }
      ]);
    });
};
