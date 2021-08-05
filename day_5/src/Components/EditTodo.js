import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import client from '../utils/client';
import { useLocation, useHistory } from 'react-router-dom';

function EditTodo(props) {
  const [todo, editTodo] = useState();
  const location = useLocation();
  const history = useHistory();
  const todoId = location.state.id;

  useEffect(() => {
    client('/todo/find', { method: 'POST', data: { id: todoId } })
      .then((response) => editTodo(response.todo))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = (e) => {
    e.preventDefault();
    client('/todo', {
      method: 'PATCH',
      data: { id: todoId, todo: todo },
    })
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form className="app" onSubmit={submit}>
      <Form.Group>
        <Form.Label>
          <b>Edit Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          placeholder="Edit todo"
          value={todo || ''}
          onChange={(e) => editTodo(e.target.value)}
          required
        />
      </Form.Group>
      <Button className="btn" variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditTodo;
