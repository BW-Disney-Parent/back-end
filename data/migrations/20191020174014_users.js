exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments("id");
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
        .integer("requesterUserID")
        .references("id")
        .inTable("users")
        .onDelete("cascade")
        .onUpdate("cascade");
      tbl
        .integer("chaperoneUserID")
        .references("id")
        .inTable("users")
        .onDelete("cascade")
        .onUpdate("cascade");
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
        .integer("requestID")
        .references("id")
        .inTable("requests")
        .onDelete("cascade")
        .onUpdate("cascade");
      tbl
        .integer("questionerUserID")
        .references("id")
        .inTable("users")
        .onDelete("cascade")
        .onUpdate("cascade");
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
