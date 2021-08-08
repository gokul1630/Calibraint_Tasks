import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUp from '../Components/Signup';
import client from '../utils/client';

function SignUpContainer(props) {
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
  return <SignUp setUser={setUser} setPassword={setPassword} submit={submit} />;
}

export default SignUpContainer;
