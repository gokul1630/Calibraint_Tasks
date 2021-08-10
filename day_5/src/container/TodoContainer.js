import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from '../Components/AddTodo'
import Todos from '../Components/Todos'
import {
  selector,
  setId,
  setShow,
  setTodo,
  setShowForNewTodo,
  todos,
  setDescription,
} from '../redux/TodoSlice'
import '../styles/table.css'
import client from '../utils/client'

function TodoContainer(props) {
  const dispatch = useDispatch()
  const state = useSelector(selector)
  const [userId, setUserId] = useState()
  const [effect, setEffect] = useState('')

  const submit = (e) => {
    e.preventDefault()
    client('/todo/postNewTodo', {
      method: 'PUT',
      data: {
        todo: state.todo,
        pending: true,
        userId: userId,
        description: state.description,
      },
    }).then(() => {
      dispatch(setShowForNewTodo(false))
      dispatch(setTodo(''))
      dispatch(setDescription(''))
    })
  }
  const deleteTodo = (id) => {
    client(`/todo/deleteTodo`, {
      method: 'DELETE',
      data: { todoId: id, userId: userId },
    }).then(() =>
      dispatch(todos(state.todoList.filter((key) => key._id !== id)))
    )
  }

  const saveTodo = () => {
    client('/todo/updateTodo', {
      method: 'PATCH',
      data: {
        todoId: state.id,
        todo: state.todo,
        description: state.description,
      },
    })
      .then(() => {
        setEffect(Math.random())
        dispatch(setShow(false))
      })
      .catch((err) => console.log(err))
  }
  const saveCompletedTodo = (id, pending, onGoing, testing, completed) => {
    if (pending) {
      pending = false
      onGoing = true
    } else if (onGoing) {
      onGoing = false
      testing = true
    } else if (testing) {
      testing = false
      completed = true
    } else if (completed) {
      completed = false
      pending = true
    }
    client('/todo/updateCompletedTodo', {
      method: 'PATCH',
      data: {
        todoId: id,
        pending: pending,
        onGoing: onGoing,
        testing: testing,
        completed: completed,
      },
    })
      .then(() => {
        setEffect(Math.random())
      })
      .catch((err) => console.log(err))
  }

  const findTodo = (id, todo, description) => {
    dispatch(setId(id))
    dispatch(setTodo(todo))
    dispatch(setDescription(description))
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
  }, [dispatch, state.showForNewTodo, state.show, effect])

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
        saveCompletedTodo={saveCompletedTodo}
        description={state.description}
        setDescription={setDescription}
      />
    </>
  )
}

export default TodoContainer
