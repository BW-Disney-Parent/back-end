exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .notNullable()
        .unique();
      tbl.string("password").notNullable();
      tbl.string("firstName").notNullable();
      tbl.string("lastName").notNullable();
      tbl
        .bool("isParent")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("requests", tbl => {
      tbl.increments();
      tbl
        .foreign("userID")
        .notNullable()
        .references("id")
        .inTable("users");
      tbl
        .foreign("chaperoneID")
        .references("id")
        .inTable("users");
      tbl
        .bool("accepted")
        .defaultTo(false)
        .notNullable();
      tbl.string("meetingPlace").notNullable();
      tbl.datetime("dateTime").notNullable();
      tbl.integer("kids").notNullable();
      tbl.string("description");
    })
    .createTable("questions", tbl => {
      tbl.increments();
      tbl
        .foreign("requestID")
        .references("id")
        .inTable("requests")
        .notNullable();
      tbl
        .foreign("userID")
        .references("id")
        .inTable("users")
        .notNullable();
      tbl.string("content").notNullable();
      tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("questions")
    .dropTableIfExists("requests")
    .dropTableIfExists("users");
};
