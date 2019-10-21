const db = require("../data/dbConfig.js");

/*  Post a question, edit a question, delete a question   */

const insert = question => {
  console.log(question);
  return db("questions").insert(question);
};

const update = (id, changes) => {
  return db("questions")
    .where({ id: id })
    .update(changes);
};

const deleteQuestion = id => {
  return db("questions")
    .where({ id: id })
    .del();
};

module.exports = {
  insert,
  update,
  deleteQuestion
};
