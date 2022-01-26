import './App.css';
import { Router } from "@reach/router";
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit';
import Form from './components/Form';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from 'react';
import AuthButton from './components/buttons/AuthButton';
import CreateButton from './components/buttons/CreateButton';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1 style={{fontFamily: "serif, Times New Roman", paddingTop: "25px"}}>Home Inspectors LLC</h1>
      <div style={{marginTop: "30px"}}>
        <a href='/'>Home</a> | <a href='/services'>Services</a> | <a href='/about'>About</a> | 
        <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> <CreateButton isLoggedIn={isLoggedIn}/>
      </div>
      <Router>
        <Home path="/" />
        <DisplayAll path="/services" isLoggedIn={isLoggedIn} />
        <Form path="/new" />
        <Edit path="/services/:id/edit" />
        <DisplayOne path="/services/:id" />
        <About path="/about" />
        <Login path="/login" setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
