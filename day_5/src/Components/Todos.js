import React from 'react';
import { Table } from 'react-bootstrap';
import PopupModal from './PopupModal';
import TodoTable from './TodoTable';

function Todos(props) {
  const { saveTodo, deleteTodo, findTodo, data, setShow, setTodo, dispatch } =
    props;
  return (
    <>
      <PopupModal
        show={data.show}
        setShow={setShow}
        todo={data.todo}
        setTodo={setTodo}
        v
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
            {data.todoList.map((todoItem) => {
              return (
                <TodoTable
                  todo={todoItem.todo}
                  key={todoItem._id}
                  completed={todoItem.completed}
                  completeTodo={saveTodo}
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
