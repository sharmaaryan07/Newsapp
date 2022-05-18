import './App.css';
import Navbar from "./component/Navbar";
// import About from "./component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './component/About';
import Newsitem from './component/Newsitem';
import { useState } from 'react';

function App() {

  const [mode,setMode]= useState('white')
  let toggleDarkMode=()=>{
    if(mode === 'white'){
      setMode('gray-900');
      document.body.style='background: #111827; color: white ';
    }
    else{
      setMode('white')
      document.body.style="backgorund: white; color: black";
    }
  }


  return (
    <div>
      <Router>
        <Navbar title="NewsApp"  toggleDarkMode={toggleDarkMode} mode={mode}/>
        <Routes>
          <Route path='/' element={<Newsitem />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
