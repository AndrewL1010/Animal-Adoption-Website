import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
//I changed the reactbootstrap modal to pass in a title/paragraph as props to display a basic message instead of creating multiple modals
function Add(props) {
    const{title, paragraph} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
          {paragraph}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className="modal-buttons" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default Add;