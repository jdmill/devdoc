const { Schema, model } = require("mongoose");
const Component = require("./Component");

const projectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true,
    maxlength: 60,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
  componentArray: [Component.schema],
});

const Project = model("Project", projectSchema);
module.exports = Project;
