const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "todo" } // todo, in-progress, done
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);