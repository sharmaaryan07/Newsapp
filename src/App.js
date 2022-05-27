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
          <Route exact path='/' element={<News key={"general"} mode={mode} pageSize={16} category='General' />} />
          <Route exact path='/business' element={<News key={"business"} mode={mode} pageSize={16} category='Business' />} />
          <Route exact path='/entertainment' element={<News key={"entertainment"} mode={mode} pageSize={16} category='Entertainment' />} />
          <Route exact path='/health' element={<News key={"health"} mode={mode} pageSize={16} category='Health' />} />
          <Route exact path='/science' element={<News key={"science"} mode={mode} pageSize={16} category='Science' />} />
          <Route exact path='/sports' element={<News key={"sports"} mode={mode} pageSize={16} category='Sports' />} />
          <Route exact path='/technology' element={<News key={"technology"} mode={mode} pageSize={16} category='Technology' />} />
          <Route path='/about' element={<About mode={mode} />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
