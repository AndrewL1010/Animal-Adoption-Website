import React, { useState, useRef, useEffect, useContext } from "react";
import Add from './Animal'
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import DeleteWarning from '../components/DeleteWarning'
import EditModal from '../components/EditModal'
function Animal(props) {
    // the edit and delete buttons are created here.

    // setAnimalApplication is used to update the Animal name we are adopting when the user clicks "adopt now"

    // warningShow/setWarningShow will cause a warning modal to pop up if the user clicks on the X to delete an animal.
    // the deletion functionality is done through DeleteWarning.js (the modal)

    //editShow/setEditShow will cause a modal to pop up for users to edit some animal details.
    // the editing functionality is done through EditModal.js (the modal)

    const { setAnimalApplication } = useContext(Context);
    const { a } = props;
    const [warningShow, setWarningShow] = React.useState(false);
    const [editShow, setEditShow] = React.useState(false);


    return (
        <div className="Animal" key={a.id}>

            <div className="card-content">
                <DeleteWarning
                    show={warningShow}
                    onHide={() => setWarningShow(false)}
                    animalid={a.id}

                />
                <button className="delete" onClick={() => {
                    setWarningShow(true)
                }}>X</button>


                <h2>{a.name}</h2>

                <img src={a.image_link} alt="An Animal" ></img><br></br>
                <span className="animal-text">Life Span: {a.lifespan} years</span><br></br>
                <span className="animal-text">Food: {a.diet}</span><br></br>
                <span className="animal-text">Type: {a.animal_type}</span><br></br>


                <div className="adopt-button-container">
                    <Link className="adopt-button" to="/Application" onClick={() => {
                        setAnimalApplication(a.id)
                    }}>Adopt Now</Link>
                </div>
                <EditModal
                    show={editShow}
                    onHide={() => setEditShow(false)}
                    a={a}

                />

                <button className="edit" onClick={() => {
                    setEditShow(true)
                }}>edit details</button>



            </div>
        </div>
    )
}

export default Animal;


