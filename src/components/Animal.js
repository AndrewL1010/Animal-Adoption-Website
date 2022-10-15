import React, { useState, useRef, useEffect, useContext } from "react";
import Add from './Animal'
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteWarning from '../components/DeleteWarning';
import EditModal from '../components/EditModal';
import animalcss from '../animal.module.css';
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
        <div className={animalcss.Animal} key={a.id}>


            <DeleteWarning
                show={warningShow}
                onHide={() => setWarningShow(false)}
                animalid={a.id}

            />
            <button className={animalcss.delete} onClick={() => {
                setWarningShow(true)
            }}>X</button>


            <h2>{a.name}</h2>

            <img src={a.image_link} alt="An Animal" ></img><br></br>
            <span className={animalcss.animaltext}>Life Span: {a.lifespan} years</span><br></br>
            <span className={animalcss.animaltext}>Food: {a.diet}</span><br></br>
            <span className={animalcss.animaltext}>Type: {a.animal_type}</span><br></br>


            <div className={animalcss.adoptbutton}>
                <Link className={animalcss.adoptbuttontext} to="/Application" onClick={() => {
                    setAnimalApplication(a.id)
                }}>Adopt Now</Link>
            </div>
            <EditModal
                show={editShow}
                onHide={() => setEditShow(false)}
                a={a}

            />

            <button className={animalcss.edit} onClick={() => {
                setEditShow(true)
            }}>edit details</button>




        </div>
    )
}

export default Animal;


