import React from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';

function PopupModal({ show, setShow, todo, setTodo, click }) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => setShow(!show)}
    >
      <Modal.Header closeButton>
        <InputGroup>
          <FormControl
            placeholder="Edit Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            click();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;
