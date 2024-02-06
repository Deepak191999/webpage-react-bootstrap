import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import Mission from "./Mission";
import OurServices from "./OurServices";
function Home() {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fugiat accusantium aperiam, facere pariatur sit magni
                eos vel distinctio, excepturi necessitatibus qui in, accusamus
                asperiores. Eaque, dolor suscipit ipsum quaerat sapiente nulla
                quo repudiandae odit odio sunt. Illo sequi quidem, hic fuga
                reprehenderit fugit. Soluta officiis, eveniet sed omnis iusto
                corporis. Velit autem sit sequi, iure temporibus nam expedita
                beatae?
              </p>
              <Link to="/about" className="btn btn-primary shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* missiion vision */}
      <Mission />

      {/* service section */}
    <OurServices/>
    </div>
  );
}

export default Home;
