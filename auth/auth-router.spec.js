const request = require("supertest");

const Users = require("../data/dbConfig.js");

const bcrypt = require("bcryptjs");

// the data access file we are testing
const server = require("../api/server.js");

describe("POST /register", function() {
  beforeEach(async () => {
    // this function executes and clears out the table before each test
    await Users("users").truncate();
  });

  it("responds with 201", function(done) {
    request(server)
      .post("/api/auth/register")
      .send({
        username: "jofdfdfdfhn",
        password: "butteeeee",
        firstName: "Chicken",
        lastName: "Tacos"
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds with 400 with incorrect body", function(done) {
    request(server)
      .post("/api/auth/register")
      .send({
        username: "jofdfdfdfhn",
        password: "butteeeee"
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /login", function() {
  it("202 with correct login", function(done) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("Devin", salt);

    //need to insert user because db is empty
    return Users("users")
      .insert({
        username: "Devin",
        password: hash,
        firstName: "blah",
        lastName: "blah"
      })
      .then(() => {
        request(server)
          .post("/api/auth/login")
          .send({ username: "Devin", password: "Devin" })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(202)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });

  it("responds with 400 with incorrect body", function(done) {
    request(server)
      .post("/api/auth/login")
      .send({ fdssd: "jofdfdfdfhn", password: "butteeeee" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds with 401 with incorrect credentials", function(done) {
    request(server)
      .post("/api/auth/login")
      .send({ username: "Devin", password: "notDevin" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
