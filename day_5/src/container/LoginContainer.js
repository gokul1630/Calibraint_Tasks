import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../Components/Login'
import client from '../utils/client'

function LoginContainer(props) {
  const [user, setUsers] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const token = await client('/user/loginUser', {
        method: 'POST',
        data: { user, password },
      })
      localStorage.setItem('token', JSON.stringify(token))
    } catch (err) {
      alert(err.response.data.message)
    }
    try {
      const data = await client('/user/me', { method: 'POST' })
      localStorage.setItem('user', JSON.stringify(data))
      history.push('/todos')
    } catch (err) {
      console.log(err.response.data.message)
    }
  }
  return <Login setUsers={setUsers} setPassword={setPassword} submit={submit} />
}

export default LoginContainer
