import React, { useState, useRef, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../contexts/Context";
function EditModal(props) {
    //we use context to map through the list of animals and to update the animal state once we edit the animal details
    const { animal, setanimal } = useContext(Context);
    const { a } = props;

    const [animalName, setAnimalName] = useState(a.name);
    const [animalDiet, setAnimalDiet] = useState(a.diet);
    const [animalLifespan, setAnimalLifespan] = useState(a.lifespan);

    // 3 handlers to update the states of the inputs in the edit modal
    function handleName(e) {
        setAnimalName(e.target.value);
    }
    function handleDiet(e) {
        setAnimalDiet(e.target.value);
    }
    function handleLifespan(e) {
        setAnimalLifespan(e.target.value);
    }
    // on submit this function will execute, it uses the 3 states to update the animal
    function handleEdit() {
        console.log(animal);
        const editedAnimalList = animal.animals.map(animal => {

            if (a.id === animal.id) {

                return { ...animal, name: animalName, diet: animalDiet, lifespan: animalLifespan }
            }
            return animal;
        });
        
        setanimal({ animals: editedAnimalList })
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
                    Editing for {a.name}
                </Modal.Title>
            </Modal.Header>
            {/* Three on change handlers that keep trap of inputs in the edit modal*/}
            <form className="edit-form" onSubmit={() => {
                    handleEdit();
                }}>
                <label className="edit-label name-label" htmlFor="name">Name: </label><br></br>
                <input className="edit-input" id="name" defaultValue={`${a.name}`} onChange={(handleName)}></input>
                <br></br>

                <label className="edit-label diet-label" htmlFor="diet">Diet: </label><br></br>
                <textarea className="edit-input" id="diet" defaultValue={`${a.diet}`} onChange={handleDiet}>

                </textarea>
                <br></br>

                <label className="edit-label lifespan-label" htmlFor="lifespan">Lifespan: </label><br></br>
                <input className="edit-input" id="lifespan" defaultValue={`${a.lifespan}`} onChange={handleLifespan}></input>

                <br></br>



                <button type="submit" className="modal-buttons save-edit">Save Changes</button>
            </form>





        </Modal>
    );
}

export default EditModal;