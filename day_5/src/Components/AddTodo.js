import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import client from '../utils/client';

function AddTodo(props) {
  const [todo, setTodo] = useState('');
  const submit = (e) => {
    e.preventDefault();
    client('/todo', { method: 'POST', data: { todo: todo } }).then(() => {
      props.history.push('/');
    });
  };
  return (
    <>
      <Form className="app" onSubmit={submit}>
        <Form.Group>
          <Form.Label>
            <b>Add Todo</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add new todo"
            required
          />
        </Form.Group>
        <Button className="btn" variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddTodo;
