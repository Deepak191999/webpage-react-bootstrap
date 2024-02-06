import React from "react";
import Mission from "./Mission";
import {Link} from 'react-router-dom'
function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 ">
            
              <Link to="/" className="text-black text-decoration-none fs-5" >Home </Link>
              <Link to="/about" className="text-black text-decoration-none fs-5" >/ About </Link>
            </div>

            <div className="col-md-8 ">
              <h6 className="float-end"></h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>

          <div className="underline "></div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ip Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vitae dolore, asperiores sequi quaerat rem recusandae officia distinctio eaque ipsam temporibus eveniet est dolor rerum laboriosam, quas suscipit cupiditate dignissimos.
          </p>
        </div>
      </section>

      {/* //include mission */}
      <Mission/>
    </div>
  );
}

export default About;
