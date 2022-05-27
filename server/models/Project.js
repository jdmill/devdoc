const { Schema, model } = require("mongoose");

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
  componentArray: [{ type: Schema.Types.ObjectId, ref: "Component" }],
});

const Project = model("Project", projectSchema);
module.exports = Project;
