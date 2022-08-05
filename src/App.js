import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Context } from "./contexts/Context";
import Login from "./pages/Login";
import Home from './pages/Home';
import Application from './pages/Application';
import Documentation from './pages/Documentation';
import React, { useState, useRef, useEffect, useContext } from "react";

function App() {
  const [username, setUsername] = useState("User");

  const [animalApplication, setAnimalApplication] = useState("");

  const [animal, setanimal] = useState({
    loading: false,
    animals: null,
  });

  



  return (

    
    <Context.Provider value={{ username, setUsername, animalApplication, setAnimalApplication, animal, setanimal}}>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/application' component={Application} exact />
        <Route path='/documentation' component={Documentation} exact />
      </Switch>
     </Context.Provider>


  );
}

export default App;
