import React from 'react'
import { Link } from "react-router-dom";
function OurServices() {
  return (
    <section className="section  border-top ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4 ">
              <div className="card bg-lighted shadow px-3 py-3">
                <img src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400" alt="services" className="w-100 border-bottom" />
                <div className="card-body">
                    <h6>Services 1</h6>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil impedit molestiae aut dolorem ab eaque cum soluta magnam. Numquam architecto, corporis repellendus magnam praesentium minus cum quisquam a commodi sunt aut odio impedit. Quam sapiente officiis laboriosam quia architecto, nisi impedit optio, quod, vitae animi possimus. Accusantium quibusdam fuga tempore!</p>
                <Link to="/service" className="btn btn-link">Read more</Link>
                </div>
              </div>
              
            </div>

             <div className="col-md-4 ">
              <div className="card bg-lighted shadow px-3 py-3">
                <img src="https://cdn1.tripoto.com/media/filter/tst/gen/2215463/Image/1703659645_1701327286_jannes_jacobs_kriga7iun08_unsplash_jpg.webp" alt="services" className="w-100 border-bottom" />
                <div className="card-body">
                    <h6>Services 2</h6>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil impedit molestiae aut dolorem ab eaque cum soluta magnam. Numquam architecto, corporis repellendus magnam praesentium minus cum quisquam a commodi sunt aut odio impedit. Quam sapiente officiis laboriosam quia architecto, nisi impedit optio, quod, vitae animi possimus. Accusantium quibusdam fuga tempore!</p>
                <Link to="/service" className="btn btn-link">Read more</Link>
                </div>
              </div>
              
            </div>
            
             <div className="col-md-4 ">
              <div className="card bg-lighted shadow px-3 py-3">
                <img src="https://cdn1.tripoto.com/media/filter/tst/gen/2215463/Image/1703659862_1699881061_kabir_van_wegen_0dp_itiemq_unsplash_jpg.webp" alt="services" className="w-100 border-bottom" />
                <div className="card-body">
                    <h6>Services 3</h6>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil impedit molestiae aut dolorem ab eaque cum soluta magnam. Numquam architecto, corporis repellendus magnam praesentium minus cum quisquam a commodi sunt aut odio impedit. Quam sapiente officiis laboriosam quia architecto, nisi impedit optio, quod, vitae animi possimus. Accusantium quibusdam fuga tempore!</p>
                <Link to="/service" className="btn btn-link">Read more</Link>
                </div>
              </div>
              
            </div>
            
            </div>
          </div>
        
      </section>
  )
}

export default OurServices