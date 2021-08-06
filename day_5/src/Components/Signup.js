import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../styles/form.css';
import client from '../utils/client';

function SignUp(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    client('/user/signUpUser', {
      method: 'PUT',
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
        <h2>Sign Up</h2>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
          Sign Up
        </Button>
        <p>
          Already have an account?{' '}
          <Link className="signup-link" to="/login">
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default SignUp;
