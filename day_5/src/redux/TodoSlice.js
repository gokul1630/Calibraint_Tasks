import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
    show: false,
    todo: '',
    id: null,
  },
  reducers: {
    todos: (state, action) => {
      state.todoList = action.payload
    },
    setShow: (state, action) => {
      state.show = action.payload
    },
    setTodo: (state, action) => {
      state.todo = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
  },
})

export const { todos, setShow, setTodo, setId } = TodoSlice.actions

export const selector = (state) => state

export default TodoSlice.reducer
