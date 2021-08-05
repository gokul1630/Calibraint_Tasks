const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TodoSchema = Schema(
  {
    todo: { type: String, minlength: 2 },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model('TodoModel', TodoSchema);
module.exports = TodoModel;
