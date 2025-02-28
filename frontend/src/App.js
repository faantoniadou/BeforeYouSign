// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import LocationFinder from './pages/LocationFinder';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Routes} from "react-router";

import './index.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/location-finder" element={<LocationFinder />} />
      </Routes>
    </Router>
  );
}

export default App;
