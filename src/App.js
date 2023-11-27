import React from 'react';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Services from './components/routes/Services';
import Contact from './components/routes/Contact';
import SignUp from './components/routes/SignUp';

function App() {
  return (
    <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/services' Component={Services}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/signup' Component={SignUp}/>
        </Routes>
        
    </div>


  );
}

export default App;
