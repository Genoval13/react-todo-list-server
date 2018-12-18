
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_list', function (table) {
    table.increments();
    table.string('name');
    table.boolean('complete');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_list')
};
