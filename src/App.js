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
import Footer from './component/Footer';
import LoadingBar from 'react-top-loading-bar'


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

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
      <LoadingBar
        height={3}
        color='#0ea5e9'
        progress={progress}
      />
        <Navbar title="NewsApp" toggleDarkMode={toggleDarkMode} mode={mode} />
        <Routes>
          <Route exact path='/' element={<News key={"general"} setProgress={setProgress} mode={mode} pageSize={16} category='General' />} />
          <Route exact path='/business' element={<News key={"business"} setProgress={setProgress} mode={mode} pageSize={16} category='Business' />} />
          <Route exact path='/entertainment' element={<News key={"entertainment"} setProgress={setProgress} mode={mode} pageSize={16} category='Entertainment' />} />
          <Route exact path='/health' element={<News key={"health"} setProgress={setProgress} mode={mode} pageSize={16} category='Health' />} />
          <Route exact path='/science' element={<News key={"science"} setProgress={setProgress} mode={mode} pageSize={16} category='Science' />} />
          <Route exact path='/sports' element={<News key={"sports"} setProgress={setProgress} mode={mode} pageSize={16} category='Sports' />} />
          <Route exact path='/technology' element={<News key={"technology"} setProgress={setProgress} mode={mode} pageSize={16} category='Technology' />} />
          <Route path='/about' element={<About  mode={mode} setProgress={setProgress} />} />

        </Routes>
      </Router>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
