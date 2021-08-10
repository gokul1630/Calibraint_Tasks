import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../Components/Login'
import client from '../utils/client'

function LoginContainer(props) {
  const [user, setUsers] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const submit = (e) => {
    e.preventDefault()
    client('/user/loginUser', {
      method: 'POST',
      data: { user: user, password: password },
    })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response))
        history.push('/todos')
      })
      .catch((err) => alert('User Not Found in Database'))
  }
  return <Login setUsers={setUsers} setPassword={setPassword} submit={submit} />
}

export default LoginContainer
