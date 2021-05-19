
exports.up = function(knex) {
    return knex.schema
        .createTable('user_requests', function (table) {
            table.increments('id');
            table.string('ip');
            table.string('data');
        })

};

exports.down = function(knex) {
    return knex.schema.dropTable('user_requests')
};
