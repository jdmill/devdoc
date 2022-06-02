const { Schema, model } = require("mongoose");

// List/refence/stored info  of all available components available to make a great customized webpage
const componentSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
    default: "New Component"
  },
  compType: {
    type: String,
    required: true,
    validators: {
      enum: ["header", "article-photo", "contact", "footer"],
    },
  },
  links: [
    {
      linkName: String,
      url: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    default: '/'
  },
  text: {
    type: String,
    minlength: 12,
    maxlength: 255,
    default: 'Edit this component to change this text'
  },
  contact: {
    type: Boolean,
    default: false,
  },
});

const Component = model("Component", componentSchema);
module.exports = Component;
