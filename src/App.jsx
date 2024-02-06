

import './App.css'
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
  
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
