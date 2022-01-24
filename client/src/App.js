import './App.css';
import { Router } from "@reach/router";
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit';
import Form from './components/Form';
import About from './components/About';
import Home from './components/Home';
import house from './img/house.jpg'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      {/* <img src={house} className='img-fluid'></img> */}
      <h1>Home Inspectors LLC</h1>

      <a href='/'>Home</a> | <a href='/services'>Services</a> | <a href='/about'>About</a> | <a href='/login'>Login</a>

      <Router>
        <Home path="/" />
        <DisplayAll path="/services" />
        <Form path="/new" />
        <Edit path="/services/:id/edit" />
        <DisplayOne path="/services/:id" />
        <About path="/about" />
        <Login path="/login" />
      </Router>
    </div>
  );
}

export default App;
