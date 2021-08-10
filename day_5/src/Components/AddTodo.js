import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import PopupModal from '../Components/PopupModal'
import {
  selector,
  setTodo,
  setShowForNewTodo,
  setDescription,
} from '../redux/TodoSlice'

function AddTodo(props) {
  const { submit } = props
  const dispatch = useDispatch()
  const state = useSelector(selector)

  return (
    <div className="add-todo">
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(setShowForNewTodo(true))}
      >
        Add Todo
      </Button>
      <PopupModal
        show={state.showForNewTodo}
        setShow={setShowForNewTodo}
        todo={state.todo}
        setTodo={setTodo}
        dispatch={dispatch}
        click={submit}
        description={state.description}
        setDescription={setDescription}
      />
    </div>
  )
}

export default AddTodo
