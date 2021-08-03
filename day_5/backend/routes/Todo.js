const TodoModel = require('../model/TodoModel');
const router = require('express').Router();

router.route('/').get((req, res) => {
     TodoModel.find()
       .then(() => TodoModel.find().then((response) => res.json(response)))
       .catch((err) => res.status(400).json(err));
});
router.route('/find').post((req, res) => {
  const id = req.body.id;
  console.log(id)
  TodoModel.findById(id)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => res.status(400).json(err));
});
router.route('/').post((req, res) => {
  const todo = req.body.todo;
  const Model = new TodoModel({
    todo,
  });
  Model.save()
    .then(() => res.send('todo added'))
    .catch((err) => res.status(400).json('Error:' + err));
});

router.route('/').patch((req, res) => {
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
});

router.route('/').delete((req, res) => {
  const id = req.body.id;
  TodoModel.findByIdAndDelete(id)
    .then(() => TodoModel.find().then((response) => res.json(response)))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
