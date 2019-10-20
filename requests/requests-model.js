const db = require("../data/dbConfig.js");

// insert, update, delete
// get all requests

// get all requests except my user id --> jobs I can take
// get all requests where user id == me --> my requests
// get all requests where user id == me and accept: true --> my accept requests
// get all requests where chaperoneID == myid and accepted: true
const getAll = filter => {
  return db("requests").where(filter);
};

const insert = request => {
  return db("requests").insert(request);
};

const update = (id, changes) => {
  return db("requests")
    .where(id)
    .update(changes);
};

const deleteRequest = id => {
  return db("requests")
    .where(id)
    .del();
};
module.exports = {
  getAll,
  insert,
  update,
  deleteRequest
};
