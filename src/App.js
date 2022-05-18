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

function App() {
  return (
    <div>
      <Router>
        <Navbar title="NewsApp" />
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <Newsitem />
    </div>
  );
}

export default App;
