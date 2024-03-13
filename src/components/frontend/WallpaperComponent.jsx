import React from 'react'
import image1 from '../../assets/imgNamettra/76647_0.jpg'
import image2 from '../../assets/imgNamettra/76648_0.jpg'
import image3 from '../../assets/imgNamettra/76649_0.jpg'
import image4 from '../../assets/imgNamettra/76650_0.jpg'
import image5 from '../../assets/imgNamettra/76651_0.jpg'
import image6 from '../../assets/imgNamettra/76652_0.jpg'

const WallpaperComponent = () => {
  return (
    <section className="projects-section-two">
    <div className="auto-container">
      <div className="text-center sec-title">
        <h2>Wallpaper</h2>
        <div className="text">Always honest rules of cooperation <br />We Follow them</div>
      </div>
      {/*Sortable Masonry*/}
      <div className="sortable-masonry">
        {/*Filter*/}
        <div className="filters">
          <ul className="clearfix filter-tabs filter-btns">
            <li className="active filter" data-role="button" data-filter=".all">All Wallpaper</li>
            <li className="filter" data-role="button" data-filter=".office-renovation">ราศี</li>
            <li className="filter" data-role="button" data-filter=".exterior-design">วันเกิด</li>
            {/* <li class="filter" data-role="button" data-filter=".interior-design">Interior Design</li>
                  <li class="filter" data-role="button" data-filter=".modeling-flooring">Modeling Flooring</li>
                  <li class="filter" data-role="button" data-filter=".celing-roofing">Celing & Roofing</li> */}
          </ul>
        </div>
        <div className="items-container row">
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item exterior-design modeling-flooring col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image1} alt="image1" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href={image1} className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item interior-design office-renovation col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image2} alt="image1" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href="images/gallery/2-2.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item celing-roofing office-renovation col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image3} alt="image3" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href="images/gallery/2-3.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item exterior-design modeling-flooring col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image4} alt="image1" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href="images/gallery/2-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item exterior-design modeling-flooring col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image5} alt="image1" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href="images/gallery/2-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Block */}
          <div className="project-block-two all masonry-item exterior-design modeling-flooring col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src={image6} alt="image1" /></figure>
              </div>
              <div className="overlay-box">
                <div className="overlay-inner">
                  <h4>Wooden Godown</h4>
                  <div className="icon-box">
                    <a href="images/gallery/2-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon fa fa-expand-arrows-alt" /></a>
                    <a href="project-detail.html"><span className="icon fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center btn-box">
        <a href="projects.html" className="theme-btn btn-style-two"><span className="btn-title">All Wallpaper</span></a>
      </div>
    </div>
  </section>
  )
}

export default WallpaperComponent