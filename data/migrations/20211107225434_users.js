exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username").unique().notNullable();
    tbl.string("password").notNullable();
    tbl.string("role");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
