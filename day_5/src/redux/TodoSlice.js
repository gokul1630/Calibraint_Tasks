import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
    show: false,
    showForNewTodo: false,
    todo: '',
    description:'',
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
    setDescription: (state, action) => {
      state.description=action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    setShowForNewTodo: (state, action) => {
      state.showForNewTodo = action.payload
    },
  },
})

export const { todos, setShow, setTodo, setId, setShowForNewTodo, setDescription } =
  TodoSlice.actions

export const selector = (state) => state

export default TodoSlice.reducer
