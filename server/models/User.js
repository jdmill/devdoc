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
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  projects: [Project.schema],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.passwordCheck = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model("User", usersSchema);

module.exports = User;
