import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
function TableData(props) {
  const {
    completed,
    pending,
    onGoing,
    testing,
    todo,
    description,
    editTodo,
    completeTodo,
    deleteTodo,
    id,
  } = props
  return (
    <td>
      <h5
        className="table-data"
        onClick={(e) => {
          e.preventDefault()
          editTodo(id, todo, description)
        }}
      >
        {todo}
      </h5>
      <p>{description}</p>
      <IconButton
        onClick={(e) => {
          completeTodo(
            todo,
            description,
            id,
            pending,
            onGoing,
            testing,
            completed
          )
        }}
      >
        <NavigateNextIcon />
      </IconButton>
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          deleteTodo(id)
        }}
      >
        <DeleteIcon />
      </IconButton>
    </td>
  )
}

export default TableData
