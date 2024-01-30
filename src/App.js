import React from "react";
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter, Route, Routes , Link} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e3a53';
      showalert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled','success' );
    }
  }

  const[alert,setAlert] = useState(null);
  const showalert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( () =>{
      setAlert(null);
    },1500)

  }


  return (
    <> 
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode} />
   
    <Alert alert={alert} />
    <Routes>
          <Route path="/about" element={<About />}></Route>
          
          <Route path="/" element={<TextForm title="Enter text to Analyze" mode={mode} showalert={showalert}/>}>
          
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
