import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selector, setTodo } from '../redux/TodoSlice'
import client from '../utils/client'
import AddTodo from '../Components/AddTodo'

function AddTodoContainer(props) {
  const [user, setUser] = useState()
  const dispatch = useDispatch()
  const state = useSelector(selector)
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      let data = JSON.parse(user)
      setUser(data)
    } else {
      console.log(user)
    }
  }, [])
  const submit = (e) => {
    e.preventDefault()
    client('/todo/postNewTodo', {
      method: 'PUT',
      data: {
        todo: state.todo,
        completed: state.completed,
        userId: user._id,
      },
    }).then(() => {
      props.history.push('/todos')
    })
  }
  return <AddTodo dispatch={dispatch} submit={submit} setTodo={setTodo} />
}

export default AddTodoContainer
