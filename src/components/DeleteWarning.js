import React, { useState, useRef, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../contexts/Context";
function Add(props) {
    // we obtain the states of the animal list through context
    const { animal, setanimal } = useContext(Context);
    const {animalid} = props;

    // if the user clicks yes, this function will execute and will remove the animal
    function handleDelete(id) {
        const remainingAnimals = animal.animals.filter(animal => id !== animal.id);
        setanimal({ animals: remainingAnimals })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Warning!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p>
                    Are you sure you want to remove this animal for adoption?
                </p>
            </Modal.Body>
            {/* Note how deletion will only occur if user clicks yes, clicking no, or exiting the modal itself will not delete the animal*/}
            <Modal.Footer>
                <button className="modal-buttons" onClick={() => {
                    handleDelete(animalid)
                }}>Yes</button>
                <button className="modal-buttons" onClick={props.onHide}>No</button>
            </Modal.Footer>

        </Modal>
    );
}

export default Add;