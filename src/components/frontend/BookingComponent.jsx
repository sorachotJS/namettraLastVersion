import React from 'react'

const BookingComponent = () => {
  return (
    <section className="offer-section">
    <div className="auto-container">
      <div className="sec-title">
        <h2>Booking</h2>
        {/* <div class="text">What We Provide For You check now and deside it<br> do you want now this</div> */}
      </div>
      <div className="row no-gutters">
        <div className="order-2 content-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <span className="title">Special Offer</span>
            <h2>How to save <span className="discount">50%</span> <br />of money on repairs</h2>
            <div className="text">Not everyone Knows and where but there are 10 very importent tips, how each it is to save up to 50% on repairs, and on the money saved to buy new applicances.</div>
            <div className="fact-counter">
              <div className="clearfix row">
              </div>
            </div>
          </div>
        </div>
        <div className="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="discount-form">
              <div className="text">ที่กรอกสำหรับผู้ที่ต้องการจองคิวดูดวง</div>
              {/*Comment Form*/}
              <form action="#" method="post" id="email-form">
                <div className="form-group">
                  <div className="response" />
                </div>
                <div className="form-group">
                  <input type="text" name="username" className="username" placeholder="Your Name *" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="email" placeholder="Your Email *" />
                </div>
                <div className="form-group">
                  <textarea name="contact_message" className="message" placeholder="Text Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <button className="theme-btn btn-style-two" type="button" id="submit" name="submit-form"><span className="btn-title">Submit Now</span> </button>
                </div>
              </form>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </section>
  )
}

export default BookingComponent