import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SignUp from '../Components/Signup'
import client from '../utils/client'

function SignUpContainer(props) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const submit = async (e) => {
    e.preventDefault()
    try {
      const token = await client('/user/signUpUser', {
        method: 'PUT',
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
  return <SignUp setUser={setUser} setPassword={setPassword} submit={submit} />
}

export default SignUpContainer
