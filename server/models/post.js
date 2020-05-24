const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define post model
const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  cuid: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  userId: { type: String, required: true },
});

// Create post model class
const ModelClass = mongoose.model("post", postSchema);
