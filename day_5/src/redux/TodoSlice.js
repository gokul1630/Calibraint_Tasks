import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    todos: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

export const { todos } = TodoSlice.actions;

export default TodoSlice.reducer;
