const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Chicken",
          password: bcrypt.hashSync("Chicken", bcrypt.genSaltSync(10)),
          firstName: "Jerry",
          lastName: "Smith",
          isParent: false
        },
        {
          id: 2,
          username: "test",
          password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
          firstName: "Devin",
          lastName: "Jack",
          isParent: true
        },
        {
          id: 3,
          username: "taco",
          password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
          firstName: "David",
          lastName: "Irons",
          isParent: false
        },
        {
          id: 4,
          username: "Pumpkin",
          password: bcrypt.hashSync("Pumpkin", bcrypt.genSaltSync(10)),
          firstName: "Angel",
          lastName: "Henry",
          isParent: true
        },
        {
          id: 5,
          username: "Carrie",
          password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
          firstName: "Carrie",
          lastName: "Fanliene",
          isParent: false
        }
      ]);
    });
};
