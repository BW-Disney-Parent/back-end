const Users = require("./users-model.js");
const db = require("../data/dbConfig.js");
function truncateDB() {
  return db("users").truncate();
}

it("should set environment to testing", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

beforeEach(async () => {
  await truncateDB();
});

describe("Insert", () => {
  it("DB is empty", async () => {
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

describe("update", () => {
  it("DB updates firstName from Seth to Bryan", async () => {
    const junk = await Users.insert({
      id: 100,
      username: "SethyUpdate",
      password: "Seth",
      firstName: "Seth",
      lastName: "Seth"
    });
    const prevDb = await Users.getBy({ firstName: "Seth" });

    expect(prevDb.firstName).toBe("Seth");
    const dbRes = await Users.update({ id: 100 }, { firstName: "Bryan" });
    expect(dbRes.firstName).toBe("Bryan");
  });
});

describe("deleteUser", () => {
  it("DB deletes User with id", async () => {
    const junk = await Users.insert({
      id: 100,
      username: "SethyUpdate",
      password: "Seth",
      firstName: "Seth",
      lastName: "Seth"
    });

    const prevDb = await db("users");

    expect(prevDb.length).toBe(1);
    const deleteIt = await Users.deleteUser({ id: 100 });
    const newDb = await db("users");

    expect(newDb.length).toBe(0);
  });
});
