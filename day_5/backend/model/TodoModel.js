const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
  {
    todo: { type: String, minlength: 2 },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model('TodoModel', TodoSchema);
module.exports = TodoModel;
