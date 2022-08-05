import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from '../components/Modal'
import Header from "../components/Header";

function Application() {
  const [modalShow, setModalShow] = React.useState(false);
  const { animalApplication, animal, setanimal } = useContext(Context);
  console.log(animalApplication)

  let animalName = "nothing";
  console.log(animalName);
  animal.animals.map((animal) => {
    if (animal.id == animalApplication) {
      animalName = animal.name;
      console.log(animalName);
    }
    
  })
  //title/paragraph used to pass into modal as props to display a basic message
  const title = "Application Recieved";
  const paragraph = "Please be patient with us. It will take around 1-2 weeks to review your application.";

 
  return (
    <div>
      <Header></Header>
      <form action="/Home">

        <fieldset className="application-form">

          <p id="application-title"> Adoption Application For {animalName}</p><br></br>

          <input className="application-input" id="first-name" placeholder="First Name..."></input>
          <input className="application-input" id="last-name" placeholder="Last Name..."></input>
          <br></br>

          <input className="application-input" id="address" placeholder="Address..."></input><br></br>

          <input className="application-input" id="phone" placeholder="Phone Number..."></input>
          <input className="application-input" id="email" placeholder="Email..."></input>
          <br></br>


          <textarea className="application-input" id="big-box" placeholder="Reason For Adoption....">

          </textarea>
          <br></br>
          <Modal
            show={modalShow}
            onHide={() => {
              setModalShow(false);
              window.location.href = "./Home";
            }}
            title={title}
            paragraph={paragraph}
          />


          <Button type="button" id="submit" variant="primary" onClick={() => setModalShow(true)}>
            Submit
          </Button>





        </fieldset>
      </form>
    </div>
  );
}

export default Application;
