import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar bg-dark text-white shadow navbar-expand-lg bg-body-tertiary justify-content-center text-center " data-bs-theme="dark">
      <div className="container justify-content-between text-center ">
  
              <Link to="/" className="navbar-brand active fs-4" >Navbar</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 " >
            <li className="nav-item mx-3">
            <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item mx-3">
            <Link to="/about" className="nav-link active">About</Link>
            </li>

            <li className="nav-item mx-3">
            <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
          
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
