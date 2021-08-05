const TodoModel = require('../model/TodoModel');

const get_all_todos = (req, res) => {
 TodoModel.find()
       .then((response) => res.json(response))
       .catch((err) => res.status(400).json(err));
}

const post_find_todo = (req, res) => {
const id = req.body.id;
  TodoModel.findById(id)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => res.status(400).json(err));
}

const post_new_todo = (req, res) => {
const todo = req.body.todo;
  const Model = new TodoModel({
    todo,
  });
  Model.save()
    .then(() => res.send('todo added'))
    .catch((err) => res.status(400).json(err.message));
}

const patch_todo = (req, res) => {
    const id = req.body.id;
  TodoModel.findById(id)
    .then((response) => {
      (response.todo = req.body.todo),
        response
          .save()
          .then((response) => res.json(response))
          .catch((err) => res.status(400).json('Error:' + err));
    })
    .catch((err) => res.status(400).json('Error:' + err));
}

const delete_todo = (req, res) => {
const id = req.body.id;
  TodoModel.findByIdAndDelete(id)
    .then(() => TodoModel.find().then((response) => res.json(response)))
    .catch((err) => res.status(400).json(err));
}

module.exports = {
    get_all_todos,
    post_find_todo,
    post_new_todo,
    patch_todo,
    delete_todo,
}