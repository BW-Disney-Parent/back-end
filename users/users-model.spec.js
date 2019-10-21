const Users = require("./users-model.js");
const db = require("../data/dbConfig.js");
function truncateDB() {
  return db("users").truncate();
}

it("should set environment to testing", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("Insert", () => {
  it("DB is empty", async () => {
    await truncateDB();
    const dbUsers = await db("users");
    expect(dbUsers.length).toBe(0);
  });

  it("DB has a length of 1 after inserting", async () => {
    const junk = await Users.insert({
      username: "Seth",
      password: "Seth",
      firstName: "Seth",
      lastName: "Seth"
    });

    console.log(junk);

    const dbUsers = await db("users");
    expect(dbUsers.length).toBe(1);
  });
});

describe("getBy", () => {
  it("DB response has a firstName equal to Seth", async () => {
    const junk = await Users.insert({
      username: "Sethy",
      password: "Seth",
      firstName: "Seth",
      lastName: "Seth"
    });

    const dbRes = await Users.getBy({ firstName: "Seth" });
    expect(dbRes.firstName).toBe("Seth");
  });
});
