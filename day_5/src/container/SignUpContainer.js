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
      const response = await client('/user/signUpUser', {
        method: 'PUT',
        data: { user, password },
      })
      localStorage.setItem('token', JSON.stringify(response.token))
      localStorage.setItem('user', JSON.stringify(response.user))
      history.push('/todos')
    } catch (err) {
      alert(err.response.data.message)
    }
  }
  return <SignUp setUser={setUser} setPassword={setPassword} submit={submit} />
}

export default SignUpContainer
