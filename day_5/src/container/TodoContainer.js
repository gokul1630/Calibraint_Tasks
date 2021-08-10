import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from '../Components/Todos'
import { selector, setId, setShow, setTodo, todos } from '../redux/TodoSlice'
import '../styles/table.css'
import client from '../utils/client'

function TodoContainer(props) {
  const dispatch = useDispatch()
  const state = useSelector(selector)
  const [userId, setUserId] = useState()
  const [effect, setEffect] = useState('')

  const deleteTodo = (id) => {
    client(`/todo/deleteTodo`, {
      method: 'DELETE',
      data: { todoId: id, userId: userId },
    }).then(() =>
      dispatch(todos(state.todoList.filter((key) => key._id !== id)))
    )
  }

  const saveTodo = (id, todo, completed) => {
    if (state.id === null) {
      completed = !completed
    }
    console.log(completed)
    client('/todo/updateTodo', {
      method: 'PATCH',
      data: {
        todoId: state.id ? state.id : id,
        todo: state.todo ? state.todo : todo,
        completed: completed,
      },
    })
      .then(() => {
        setEffect(Math.random())
        dispatch(setShow(false))
      })
      .catch((err) => console.log(err))
  }

  const findTodo = (id, todo) => {
    dispatch(setId(id))
    dispatch(setTodo(todo))
    dispatch(setShow(true))
  }

  useEffect(() => {
    let user = localStorage.getItem('user')
    let data = JSON.parse(user)
    setUserId(data._id)
    client('/todo/getAllTodo', {
      method: 'POST',
      data: { userId: data._id },
    })
      .then((response) => {
        dispatch(todos(response))
      })
      .catch((err) => console.log(err))
  }, [dispatch, effect])

  return (
    <>
      <AddTodo submit={submit} />
    <Todos
      saveTodo={saveTodo}
      deleteTodo={deleteTodo}
      findTodo={findTodo}
      data={state}
      setShow={setShow}
      setTodo={setTodo}
      dispatch={dispatch}
    />
  )
}

export default TodoContainer
