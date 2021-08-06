const TodoList = ({
  todo,
  id,
  completed,
  completeTodo,
  editTodo,
  deleteTodo,
}) => {
  return (
    <tr>
      <td style={{ textDecoration: completed ? 'line-through' : '' }}>
        {todo}
      </td>
      <td>
        <a
          href="!#"
          onClick={(e) => {
            e.preventDefault();
            editTodo(id);
          }}
        >
          edit
        </a>{' '}
        |{' '}
        <a
          href="!#"
          onClick={(e) => {
            e.preventDefault();
            completeTodo(id, todo, completed);
          }}
        >
          complete
        </a>{' '}
        |{' '}
        <a
          href="!#"
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default TodoList;
