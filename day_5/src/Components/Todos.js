import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../redux/TodoSlice';
import client from '../utils/client';
import PopupModal from './PopupModal';

function Todos(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoList);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [todo, setTodo] = useState('');

  const deleteTodo = (id) => {
    client(`/todo/`, { method: 'DELETE', data: { id: id } }).then((response) =>
      dispatch(todos(response))
    );
  };

  const saveTodo = (e) => {
    client('/todo', {
      method: 'PATCH',
      data: { id: id, todo: todo },
    })
      .then(() => {
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  const findTodo = (id) => {
    setId(id);
    client('/todo/find', { method: 'POST', data: { id: id } })
      .then((response) => {
        setTodo(response.todo);
        setShow(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    client('/todo', { method: 'GET' })
      .then((response) => dispatch(todos(response)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <>
      <PopupModal
        show={show}
        setShow={setShow}
        todo={todo}
        setTodo={setTodo}
        click={saveTodo}
      />
      {data.map((todoItem) => (
        <div className="app" key={todoItem._id}>
          <span>{todoItem.todo}</span>
          <div>
            <Button
              variant="outline-primary"
              onClick={() => findTodo(todoItem._id)}
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
