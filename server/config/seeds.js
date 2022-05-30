const db = require("./connection");
const { User, Project } = require("../models");

//This just clears the db and seeds some test users
db.once("open", async () => {
  await User.deleteMany();

  await User.insertMany([
    {
      username: "testUser1",
      email: "test1@gmail.com",
      password: "password123",
    },
    {
      username: "testUser2",
      email: "test2@gmail.com",
      password: "password123",
    },
  ]);

  console.log("Test Users seeded");

  await Project.deleteMany();

  console.log("Existing projects deleted from db");

  process.exit();
});
