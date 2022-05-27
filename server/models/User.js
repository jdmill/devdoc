const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Project = require("./Project");

// Schema to create User model
const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  projects: [Project.schema],
});

// Initialize our User model
const User = model("User", usersSchema);

module.exports = User;
