import React from 'react'
<link rel="stylesheet" href="Slider.css" />
function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item active">
        <img src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" className="d-block w-100 carousel-image" style={{maxHeight:"380px"}}   alt="..."/>
        <div className="carousel-caption  d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669205891_anisha_tulika_1afrwu_recy_unsplash.jpg.webp" className="d-block w-100" style={{maxHeight:"380px"}}  alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669192913_nikos_zacharoulis_o2wggezvva4_unsplash.jpg.webp" className="d-block w-100" style={{maxHeight:"380px"}}  alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider