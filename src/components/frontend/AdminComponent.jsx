import React from 'react'
import image1 from '../../assets/images/resource/team-1.jpg'
import image2 from '../../assets/images/resource/team-2.jpg'
import image3 from '../../assets/images/resource/team-3.jpg'

const AdminComponent = () => {
  return (
    <section className="team-section">
    <div className="auto-container">
      <div className="text-center sec-title">
        <h2>Admin</h2>
        <div className="text">We have Expert Worker <br />They provide Quality Work For Customer</div>
      </div>
      <div className="row">
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
          <div className="image-box">
            <figure className="image"><img src={image1} alt="image1" /></figure>
            <div className="info-box">
              <h4 className="name">Tiny Moleski</h4>
              <span className="designation">Project Manager</span>
              <ul className="social-links">
                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                <li><a href="#"><span className="fab fa-pinterest" /></a></li>
                <li><a href="#"><span className="fab fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div className="image-box">
            <figure className="image"><img src={image2} alt="image2" /></figure>
            <div className="info-box">
              <h4 className="name">Buffy Edelen</h4>
              <span className="designation">Deliver Manager</span>
              <ul className="social-links">
                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                <li><a href="#"><span className="fab fa-pinterest" /></a></li>
                <li><a href="#"><span className="fab fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
          <div className="image-box">
            <figure className="image"><img src={image3} alt="image1" /></figure>
            <div className="info-box">
              <h4 className="name">Jack Monika</h4>
              <span className="designation">Technical Specialist</span>
              <ul className="social-links">
                <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                <li><a href="#"><span className="fab fa-pinterest" /></a></li>
                <li><a href="#"><span className="fab fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AdminComponent