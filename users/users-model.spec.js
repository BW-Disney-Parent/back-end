const Users = require("../data/dbConfig.js");

function truncateDB() {
  return Users("users").truncate();
}

it("should set environment to testing", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("Insert", () => {
  it("DB is empty", async () => {
    await truncateDB();
    const dbUsers = await Users("users");
    expect(dbUsers.length).toBe(0);
  });

  it("DB has a length of 1 after inserting", async () => {
    await Users("users").insert({
      username: "Seth",
      password: "Seth",
      firstName: "Seth",
      lastName: "Seth"
    });

    const dbUsers = await Users("users");
    expect(dbUsers.length).toBe(1);
  });
});
