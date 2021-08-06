import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selector, setId, setShow, setTodo, todos } from '../redux/TodoSlice';
import '../styles/table.css';
import client from '../utils/client';
import PopupModal from './PopupModal';
import TodoList from './TodoList';

function Todos(props) {
  const dispatch = useDispatch();
  const state = useSelector(selector);
  const [userId, setUserId] = useState();
  const [effect, setEffect] = useState('');

  const deleteTodo = (id) => {
    client(`/todo/deleteTodo`, {
      method: 'DELETE',
      data: { todoId: id, userId: userId },
    }).then((response) => dispatch(todos(response)));
  };

  const saveTodo = () => {
    client('/todo/updateTodo', {
      method: 'PATCH',
      data: { todoId: state.id, todo: state.todo },
    })
      .then(() => {
        dispatch(setShow(false));
      })
      .catch((err) => console.log(err));
  };
  const setTodoComplete = (id, todo, completed) => {
    client('/todo/updateTodo', {
      method: 'PATCH',
      data: { todoId: id, todo: todo, completed: !completed },
    })
      .then((res) => {
        setEffect(Math.random());
      })
      .catch((err) => console.log(err));
  };
  const findTodo = (id) => {
    dispatch(setId(id));
    client('/todo/findOneTodo', { method: 'POST', data: { todoId: id } })
      .then((response) => {
        dispatch(setTodo(response.todo));
        dispatch(setShow(true));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let user = localStorage.getItem('user');
    let data = JSON.parse(user);
    setUserId(data._id);
    client('/todo/getAllTodo', {
      method: 'POST',
      data: { userId: data._id },
    })
      .then((response) => {
        dispatch(todos(response));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.show, effect]);

  return (
    <>
      <PopupModal
        show={state.show}
        setShow={setShow}
        todo={state.todo}
        setTodo={setTodo}
        dispatch={dispatch}
        click={saveTodo}
      />
      <p />
      <div className="todo-table container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Todos</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {state.todoList.map((todoItem) => {
              return (
                <TodoList
                  todo={todoItem.todo}
                  key={todoItem._id}
                  completed={todoItem.completed}
                  completeTodo={setTodoComplete}
                  editTodo={findTodo}
                  id={todoItem._id}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Todos;
