import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link , NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from '../components/Modal'
import Header from "../components/Header";

function Application() {
  const { animalApplication, animal, setModalShow , setAdoptedAnimalid} = useContext(Context);

  let animalName = "nothing";
  animal.animals.map((animal) => {
    if (animal.id == animalApplication) {
      animalName = animal.name;
    }

  })
  
  //title/paragraph used to pass into modal as props to display a basic message
  

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
          


  
          <NavLink to="/Home" onClick={() =>{
             setAdoptedAnimalid(animalApplication);
             setModalShow(true);
          }} id="submit"> Submit </NavLink>




        </fieldset>
      </form>
    </div>
  );
}

export default Application;
