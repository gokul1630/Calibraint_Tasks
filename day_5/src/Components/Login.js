import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../styles/form.css';
import client from '../utils/client';

function Login(props) {
  const [user, setUsers] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    client('/user/loginUser', {
      method: 'POST',
      data: { user: user, password: password },
    })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        history.push('/todos');
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={submit}>
        <h2>Sign In</h2>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user}
            onChange={(e) => setUsers(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <p>
          Don't have an account?{' '}
          <Link className="signup-link" to="/signup">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
