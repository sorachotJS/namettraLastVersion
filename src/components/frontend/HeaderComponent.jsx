import React from "react";
import logo from "../../assets/imgNamettra/76139.jpg";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="main-header">
      {/*Header Top*/}
      <div className="header-top">
        <div className="clearfix auto-container">
          <div className="top-left">
            <div className="text">Welcome to Website Namettra.</div>
          </div>
          <div className="top-right">
            <ul className="clearfix contact-info">
              <li>
                <span className="icon fa fa-phone-volume" />{" "}
                <a href="tel:590780123">590 780 123</a>
              </li>
              <li>
                <span className="icon fa fa-envelope" />{" "}
                <a href="mailto:demo@wooder.com">demo@wooder.com</a>
              </li>
              {/*Search Box*/}
              <li className="search-box-outer">
                <div className="dropdown">
                  <button
                    className="search-box-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon fa fa-search" /> Search
                  </button>
                  <div
                    className="dropdown-menu pull-right search-panel"
                    aria-labelledby="dropdownMenu3"
                  >
                    <div className="panel-outer">
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="field-name"
                              defaultValue
                              placeholder="Search Here"
                              required
                            />
                            <button type="submit" className="search-btn">
                              <span className="fa fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="clearfix social-icon-one">
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
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-skype" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Header Top */}
      {/*Header Lower*/}
      <div className="header-lower">
        <div className="auto-container">
          <div className="clearfix main-box">
            <div className="pull-left logo-outer">
              <div className="logo">
                <Link to="/">
                  <img src={logo} style={{width:70,height:70}}  />
                </Link>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="clearfix nav-outer">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu" />
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="clearfix collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="clearfix navigation">
                    <li className="current dropdown">
                      <Link to="/">Home</Link>
                   
                    </li>
                    <li className="dropdown">
                      <a href="about.html">Wallpaper</a>
                   
                    </li>
                    <li className="dropdown">
                      <a href="services.html">วัตถุมงคล</a>
                     
                    </li>
                    <li className="dropdown">
                      <a href="blog.html">ดูดวง</a>
                     
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box">
                {/* Shoppping Car */}
                {/* <div class="cart-btn">
                      <a href="#"><i class="icon flaticon-shopping-bag"></i> <span class="count">2</span></a>
                  </div> */}
                {/* Btn Box */}
                <div className="btn-box">
                  <a href="contact.html" className="theme-btn btn-style-one">
                    <span className="btn-title">login</span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Lower*/}
      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="clearfix auto-container">
          {/*Logo*/}
          <div className="logo pull-left">
            <Link href="index.html" >
            <img src={logo} width={70} height={70}   />
            </Link>
          </div>
          {/*Right Col*/}
          <div className="nav-outer pull-right">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <span className="icon flaticon-menu" />
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="clearfix collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="clearfix navigation">
                    <li className="current dropdown">
                      <a href="index.html">Home</a>
                   
                    </li>
                    <li className="dropdown">
                      <a href="about.html">Wallpaper</a>
                   
                    </li>
                    <li className="dropdown">
                      <a href="services.html">วัตถุมงคล</a>
                     
                    </li>
                    <li className="dropdown">
                      <a href="blog.html">ดูดวง</a>
                     
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              
            {/* Main Menu End*/}
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-cancel-1" />
        </div>
        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="clearfix collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="clearfix navigation">
                    <li className="current dropdown">
                      <a href="index.html">Home</a>
                   
                    </li>
                    <li className="dropdown">
                      <a href="about.html">Wallpaper</a>
                   
                    </li>
                    <li className="dropdown">
                      <a href="services.html">วัตถุมงคล</a>
                     
                    </li>
                    <li className="dropdown">
                      <a href="blog.html">ดูดวง</a>
                     
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default HeaderComponent;
