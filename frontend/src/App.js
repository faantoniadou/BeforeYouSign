import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import ContactUs from "./components/ContactUs";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Routes} from "react-router";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
