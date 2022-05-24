import './App.css';
import Navbar from "./component/Navbar";
import { useState } from 'react';
import About from './component/About';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('white')
  let toggleDarkMode = () => {
    if (mode === 'white') {
      setMode('gray-900');
      document.body.style = 'background: #111827; color: white ';
    }
    else {
      setMode('white')
      document.body.style = "backgorund: white; color: black";
    }
  }


  return (
    <div>
      <Router>
        <Navbar title="NewsApp" toggleDarkMode={toggleDarkMode} mode={mode} />
        <Routes>
          <Route path='/' element={<News mode={mode} pageSize={16}/>} />
          <Route path='/about' element={<About mode={mode} />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
