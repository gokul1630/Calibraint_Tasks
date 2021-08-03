import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import client from '../utils/client';

function EditTodo(props) {
  const [todo, editTodo] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    client('/todo/find', { method: 'POST', data: { id: id } })
      .then((response) => editTodo(response.todo))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = () => {
    client('/todo', {
      method: 'PATCH',
      data: { id: props.match.params.id, todo: todo },
    })
      .then(() => {
        props.history.push('/');
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
          value={todo || ''}
          onChange={(e) => editTodo(e.target.value)}
        />
      </Form.Group>
      <Button className="btn" variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditTodo;
