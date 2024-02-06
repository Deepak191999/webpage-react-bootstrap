import React from "react";
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 ">
            <Link to="/" className="text-black text-decoration-none fs-5" >Home </Link>
              <Link to="/contact" className="text-black text-decoration-none fs-5" >/ Contact </Link>
            </div>

            <div className="col-md-8 ">
              <h6 className="float-end"></h6>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5  bg-lighted">
        <div className="card shadow">
          <div className="card-body ">
            <div className="row">
              <div className="col-md-7">
                <form>
                  {/* Name */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      aria-describedby="name"
                      placeholder="Enter your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Email"
                    />
                  </div>

                  {/* PhoneNumber */}
                  <div className="mb-3">
                    <label for="number" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      aria-describedby="number"
                      placeholder="Enter your Mobile Number"
                    />
                  </div>

                  {/* //Message */}
                  <div className="mb-3">
                    <label for="message" className="form-label">
                      Message to us:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      rows="5"
                      aria-describedby="number"
                      placeholder="Enter your Message Here"
                    />
                  </div>

                  <div id="emailHelp" className="form-text">
                    We'll never share your data with anyone else.
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-5 border-start text-md-center pt-5">
                <h5 className="main-heading pb-3">Address information</h5>
                {/* <div className="underline"></div> */}
                <p>#RQ Bangalore Karnataka India. Byrathi</p>
                <p>Phone: +91 88800000</p>
                <p>Email: emall@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
