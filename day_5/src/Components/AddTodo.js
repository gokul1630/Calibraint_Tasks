import React from 'react'
import { Button, Form } from 'react-bootstrap'

function AddTodo({ dispatch, submit, setTodo }) {
  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={submit}>
        <Form.Group>
          <Form.Label>
            <h3>Add Todo</h3>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            className="input"
            onChange={(e) => dispatch(setTodo(e.target.value))}
            placeholder="Add new todo"
            required
          />
        </Form.Group>
        <Button className="btn" variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddTodo
