import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selector, setTodo } from '../redux/TodoSlice';
import client from '../utils/client';

function AddTodo(props) {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const state = useSelector(selector);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      let data = JSON.parse(user);
      setUser(data);
    } else {
      console.log(user);
    }
  }, []);
  const submit = (e) => {
    e.preventDefault();
    client('/todo/postNewTodo', {
      method: 'PUT',
      data: {
        todo: state.todo,
        completed: state.completed,
        userId: user._id,
      },
    }).then(() => {
      props.history.push('/todos');
    });
  };
  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={submit}>
        <Form.Group>
          <Form.Label>
            <h3>Add Todo</h3>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            className="input"
            onChange={(e) => dispatch(setTodo(e.target.value))}
            placeholder="Add new todo"
            required
          />
        </Form.Group>
        <Button className="btn" variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
