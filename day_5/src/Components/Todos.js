import React from 'react'
import { Table } from 'react-bootstrap'
import PopupModal from './PopupModal'
import TodoTable from './TodoTable'

function Todos(props) {
  const {
    saveTodo,
    deleteTodo,
    findTodo,
    data,
    setShow,
    setTodo,
    dispatch,
    saveCompletedTodo,
    description,
    setDescription,
  } = props

  return (
    <>
      <PopupModal
        show={data.show}
        setShow={setShow}
        todo={data.todo}
        setTodo={setTodo}
        dispatch={dispatch}
        click={saveTodo}
        description={description}
        setDescription={setDescription}
      />
      <p />
      <div className="todo-table container">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Todos</th>
              <th>Going</th>
              <th>Testing</th>
              <th>Completed</th>
            </tr>
          </thead>

          <tbody>
            {data.todoList.map((todoItem) => {
              return (
                <TodoTable
                  todo={todoItem.todo}
                  key={todoItem._id}
                  completeTodo={saveCompletedTodo}
                  editTodo={findTodo}
                  id={todoItem._id}
                  deleteTodo={deleteTodo}
                  pending={todoItem.pending}
                  onGoing={todoItem.onGoing}
                  testing={todoItem.testing}
                  description={todoItem.description}
                  completed={todoItem.completed}
                />
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Todos
