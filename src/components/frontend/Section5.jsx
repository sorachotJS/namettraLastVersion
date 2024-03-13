import React from "react";
import "./css/section5.css";
import pro1 from "../../assets/imgNamettra/pro1.png";
import pro2 from "../../assets/imgNamettra/pro2.png";
import line from "../../assets/imgNamettra/line-removebg-preview.png";

const Section5 = () => {
  return (
    <div className="section55">
      <div className="auto-container">
        <div className="clearfix row">
          {/* Content Column */}
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="justify-center text-center inner-column">
              <img src={pro1} alt="mockup1" width={430} height={430} />
            </div>
          </div>
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="justify-center text-center inner-column">
              <img src={pro2} alt="mockup1" width={430} height={430} />
            </div>
          </div>
        </div>
        
      </div>
      <div className="clearfix row">
          {/* <div className="justify-center mt-5 text-center inner-column">
            <img src={line} alt="mockup1" width={220} height={220} />
            <h2 className="pt-4 text-white">จองคิวผ่านไลน์เท่านั้น </h2>
          </div> */}
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="justify-center text-right inner-column">
            <img src={line} alt="mockup1" width={220} height={220} />
            </div>
          </div>
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="justify-center text-left inner-column">
            <h2 className="pt-4 text-white">จองคิวผ่านไลน์เท่านั้น </h2>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Section5;
