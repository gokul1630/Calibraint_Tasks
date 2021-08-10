import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import '../styles/button.css'

function PopupModal(props) {
  const {
    show,
    setShow,
    todo,
    setTodo,
    click,
    dispatch,
    description,
    setDescription,
  } = props
  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => {
        dispatch(setShow(!show))
        dispatch(setDescription(''))
        dispatch(setTodo(''))
      }}
    >
      <Form
        className="bs-form"
        onSubmit={(e) => {
          click(e)
          dispatch(setDescription(''))
          dispatch(setTodo(''))
        }}
      >
        <Form.Group>
          <h3>Add Todo</h3>
          <h5>Add Title</h5>
          <Form.Control
            type="text"
            value={todo}
            className="input"
            onChange={(e) => dispatch(setTodo(e.target.value))}
            placeholder="Add new todo"
            required
          />
          <br />
          <h5>Add Description</h5>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            type="text"
            className="input"
            onChange={(e) => dispatch(setDescription(e.target.value))}
            placeholder="Add new todo"
          />
        </Form.Group>
        <Button className="btn" variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  )
}

export default PopupModal
