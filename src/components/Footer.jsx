import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id blanditiis maxime minus neque dolorum architecto rerum qui consequatur accusantium!n</p>
          </div>

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/">Blog</Link></div>
          </div>

          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div><p className="text-white mb-1">#RQ Bangalore Karnataka India. Byrathi</p></div>
            <div><p className="text-white mb-1">+91 88800000</p></div>
            <div><p className="text-white mb-1">+91 88880000</p></div>
            <div><p className="text-white mb-1">emall@domain.com</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
