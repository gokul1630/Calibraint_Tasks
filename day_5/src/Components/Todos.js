import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { todos } from '../redux/TodoSlice';
import client from '../utils/client';

function Todos(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoList);
  const history = useHistory();

  const deleteTodo = (id) => {
    client(`/todo/`, { method: 'DELETE', data: { id: id } }).then((response) =>
      dispatch(todos(response))
    );
  };

  const editTodo = (todoId) => {
    const location = {
      pathname: '/edit',
      state: { id: todoId },
    };
    history.push(location);
  };

  useEffect(() => {
    client('/todo', { method: 'GET' })
      .then((response) => dispatch(todos(response)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.map((todoItem) => (
        <div className="app" key={todoItem._id}>
          <span>{todoItem.todo}</span>
          <div>
            <Button
              variant="outline-primary"
              onClick={() => editTodo(todoItem._id)}
            >
              ✏️
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => deleteTodo(todoItem._id)}
            >
              ✕
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
