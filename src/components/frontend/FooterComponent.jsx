import React from "react";
import logo from "../../assets/imgNamettra/76139.jpg";
import line from "../../assets/imgNamettra/line-removebg-preview.png";

const FooterComponent = () => {
  return (
    <footer
      className="main-footer"
      style={{ backgroundImage: "url(images/background/12.png)" }}
    >
      <div className="auto-container">
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="auto-container">
                  <div className="clearfix row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <img src={logo} width={70} height={70} />
                      </div>
                    </div>
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <h4 className="text-white">อ.ช้าง วธันญา อาธิพรม</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="footer-logo">
                  <figure className="image">
                    <a href="index.html">
                     
                     
                    </a>
                  
                  </figure>
                  อ.ช้าง วธันญา อาธิพรม
                </div> */}
                <div className="mt-3 widget-content">
                  <div className="text">
                    ประสบการณ์กว่า 35ปี หมอดูสอดเซ้น
                    หมอดูที่มีศาสตร์เป็นของตัวเอง เปิดเผยตัวตนชัดเจน คลายปม
                    พลิกชีวิต หมดทุกข์ ทำให้ดวงเปิด อุดมทรัพย์ เงินทองไม่ขาดมือ
                    ครอบครัวอบอุ่น ดูดวงให้ผู้ใหญ่ระดับประเทศมากมาย ดาราหลายคน
                    ประสบการณ์มากกว่า 40ปี
                  </div>
                 <img src={line} width={200} height={200} />
                </div>
              </div>
            </div>
           
            <div className="footer-column col-xl-5 col-lg-7 col-md-12 col-sm-12">
             
              {/* <div className="footer-widget links-widget">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <h2 className="widget-title">Services</h2>
                  
                    <div className="widget-content">
                      <ul className="list-style-two">
                        <li>
                          <a href="services.html">All Services</a>
                        </li>
                        <li>
                          <a href="service-detail.html">General Carpentry</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Furniture Remod..</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Hang Paintings</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Manufactur Furni..</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Commercial work</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Furniture Design</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <h3 className="widget-title">Useful Links</h3>
                    
                    <div className="widget-content">
                      <ul className="list-style-two">
                        <li>
                          <a href="services.html">About Us</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Team</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Pricing</a>
                        </li>
                        <li>
                          <a href="service-detail.html">FAQ's</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Subscribe</a>
                        </li>
                        <li>
                          <a href="service-detail.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-6 col-md-12 col-sm-12">
              <div className="footer-widget subscribe-widget">
                <h2 className="widget-title">Newsletter</h2>
                <div className="widget-content">
                  <div className="text">
                    Stay up to date. Follow our latest news, Carpentry tips and
                    special offers.
                  </div>
                  {/*Subscribe Form*/}
                  <div className="subscribe-form">
                    {/* <form method="post" action="contact.html">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          defaultValue
                          placeholder="Your email"
                          required
                        />
                        <button type="submit" className="theme-btn">
                          <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </form> */}
                  </div>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Bottom*/}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright-text">
            Copyrights 2024. All Rights are Reserved by{" "}
            <a href="#">Namettra.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
