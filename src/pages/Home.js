import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { nanoid } from "nanoid";
import axios from 'axios'
import Animals from '../components/Animals'
import Header from '../components/Header'
import Animal from "../components/Animal";
import { Link } from 'react-router-dom';
import Modal from '../components/Modal'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterButton from '../components/FilterButton'


function App() {
  const FILTER_MAP = {
    All: () => true,
    birds: (animal) => animal.animal_type == "Bird",
    reptiles: (animal) => animal.animal_type == "Reptile",
    mammals: (animal) => animal.animal_type == "Mammal"
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const [filter, setFilter] = useState('All');
  const { username, animal, setanimal } = useContext(Context);
  const [addAnimalShow, setAddAnimalShow] = React.useState(false);

  //title/paragraph used to pass into modal as props to display a basic message
  const title = "Added Animals";
  const paragraph = "A new animal has been added for adoption!";




  
  useEffect(() => {
    // this async function is not executed yet,
    async function fetchData() {
      setanimal({ loading: true });
      const apiUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/6';
      const res = await axios.get(apiUrl);
      const newData = res.data.map((animal) => {
        return {
          id: animal.id,
          name: animal.name,
          animal_type: animal.animal_type,
          image_link: animal.image_link,
          diet: animal.diet,
          lifespan: animal.lifespan
        };
      })
      //we update animal list and save it to localstorage
      setanimal({ loading: false, animals: newData })
      localStorage.setItem("animalList", JSON.stringify(animal.animals));
    }

    const data = localStorage.getItem('animalList');
    //first we check if data exists in local storage
    if (data) {

      //if it exists then we would want to display the data from local storage instead of requesting 6 new animals
      try {
        const animalList = JSON.parse(data)
        // if the length is 0 that means no animals actually exist so we execute the api function to get 6 new animals
        if (animalList.length == 0) {
          fetchData();
    
        }
        else {
          //if the length is not 0 that means there are at least 1 animal in local storage that we need to display
          setanimal({ loading: false, animals: JSON.parse(data) });
        }

      }
      catch (e) {
        //if anything was wrong with displaying local storage animal list we just request 6 new animals to display
        fetchData();
      }

    }
    // if data doesnt exist we request 6 new animals to display
    else {
      fetchData();
    }
  }, [])




  useEffect(() => {
    localStorage.setItem("animalList", JSON.stringify(animal.animals));
  });


  // this requests 1 new animal from the api to display , animal is added a the bottom of the page
  const handleAdd = async () => {

    setanimal({ loading: true });
    try {
      const apiUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/1';
      const res = await axios.get(apiUrl);
      const newData = res.data.map((animal) => {
        return {
          id: animal.id,
          name: animal.name,
          animal_type: animal.animal_type,
          image_link: animal.image_link,
          diet: animal.diet,
          lifespan: animal.lifespan
        };
      })
      let addedData = animal.animals.concat(newData);
      setanimal({ loading: false, animals: addedData })
      localStorage.setItem("animalList", JSON.stringify(animal.animals));

    }
    catch (e) {
    }
  };




 

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));


  return (
    <div className="todoapp stack-large">
      <Header username={username}></Header>
      {/* this is the list of possible filters the user can click to display*/}
      {filterList}
      <Modal
        show={addAnimalShow}
        //this is the add button at the bottom right of the homepage, when the user clicks, it will execute this function that adds a new animal
        onClick={handleAdd}
        onHide={() => setAddAnimalShow(false)}
        title={title}
        paragraph={paragraph}

      />
      
      <Animals isLoading={animal.loading} animals={animal.animals} FILTER_MAP={FILTER_MAP} filter={filter}/>
      

      <Button id="add-button" variant="primary" onClick={() => setAddAnimalShow(true)}>
        Add Animal
      </Button>
    </div>
  );
}

export default App;


