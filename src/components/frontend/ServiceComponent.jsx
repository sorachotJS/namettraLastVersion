import React from 'react'
import './css/service.css'
import imgSer1 from '../../assets/imgNamettra/76648_0.jpg'
import imgSer2 from '../../assets/imgNamettra/76647_0.jpg'
import imgSer3 from '../../assets/imgNamettra/76649_0.jpg'

const ServiceComponent = () => {
  return (
    <>
     <section class="services-section">
     <div class="auto-container">
     <div className="row">
  <div className="col-lg-8 col-md-12">
    <div className="sec-title">
      <h2>Our Services</h2>
      <div className="text">What We Provide For You check now and deside it<br /> do you want now this</div>
    </div>
  </div>
  <div className="col-lg-4 col-md-12">
    <div className="text-right right-btn">
      <a href="about.html" className="theme-btn btn-style-two"><span className="btn-title">All Services</span></a>
    </div>
  </div>
</div>
</div>

        <div className='mainSer'>
  <section className="section1">
    <img src={imgSer1} alt="imgService" className="image1" />
    <div className="card-text">
      <h1 className="heading1">Lahore</h1>
      <p className="para1">
        Hiran Minar is an early 16th-century Mughal era complex located in
        Sheikhupura, in the Pakistani province of Punjab. The complex was
        built at the site of a game reserve in honour of Mughal Emperor
        Jahangir's beloved antelope named Mansraj.
      </p>
    </div>
  </section>
  <section className="section2">
    <img src={imgSer2} alt="imgService" className="image2" />
    <div className="card-text">
      <h1 className="heading2">Multan</h1>
      <p className="para2">
        The Tomb of Shah Rukn-e-Alam located in Multan, Punjab, Pakistan, is
        the mausoleum of the 14th century Punjabi Sufi saint Sheikh
        Rukn-ud-Din Abul Fateh. The shrine is considered to be the earliest
        example of Tughluq architecture.
      </p>
    </div>
  </section>
  <section className="section3">
    <img src={imgSer3} alt="imgService" className="image3" />
    <div className="card-text">
      <h1 className="heading3">Attabad Lake</h1>
      <p className="para3">
        Attabad Lake Gojal is a lake located in the Gojal region of
        Gilgit−Balt="imgService"istan, Pakistan. It was formed in January 2010 due to a
        significant landslide in Attabad. Encompassing an array of engaging
        activities.
      </p>
    </div>
  </section>
</div>
</section>
    </>
  )
}

export default ServiceComponent