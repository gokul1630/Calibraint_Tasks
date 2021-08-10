import TableData from './TableData'
const TodoTable = ({
  todo,
  id,
  pending,
  onGoing,
  testing,
  completed,
  completeTodo,
  editTodo,
  deleteTodo,
  description,
}) => {
  return (
    <tr>
      {pending ? (
        <TableData
          id={id}
          todo={todo}
          completeTodo={completeTodo}
          description={description}
          editTodo={editTodo}
          pending={pending}
          deleteTodo={deleteTodo}
        />
      ) : (
        <td></td>
      )}
      {onGoing ? (
        <TableData
          id={id}
          todo={todo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          onGoing={onGoing}
          deleteTodo={deleteTodo}
          description={description}
        />
      ) : (
        <td></td>
      )}

      {testing ? (
        <TableData
          id={id}
          todo={todo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          description={description}
          testing={testing}
          deleteTodo={deleteTodo}
        />
      ) : (
        <td></td>
      )}

      {completed ? (
        <TableData
          id={id}
          todo={todo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          completed={completed}
          deleteTodo={deleteTodo}
          description={description}
        />
      ) : (
        <td></td>
      )}
    </tr>
  )
}

export default TodoTable
