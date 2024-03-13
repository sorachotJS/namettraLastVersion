import React from "react";
import "./css/section3.css";
import mockup1 from "../../assets/imgNamettra/wall-removebg-preview.png";
import {Link, useNavigate} from "react-router-dom";

const Section3 = () => {

 
  return (
    <div className="section33">
      <div className="auto-container">
        <div className="clearfix row">
          {/* Content Column */}
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <img src={mockup1} alt="mockup1" width={380} height={380} />
            </div>
          </div>
          <div className="mt-10 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="mt-5 text-center inner-column">
              <div className="mt-5 sec-title">
                <h2 className="text-white">NA METTRA</h2>
              </div>
              <div className="mt-5 about-years">
                <h3 className="text-white">WALLPAPER ประจำวันเกิด</h3>
              </div>
              <div className="mt-5 text-box1">
                <p className="text-white">
                  Wallpaper หนึ่งเดียวที่ช่วย ปรับหนุนดวง แก้กรรม
                  ปรับร้านกลายเป็นดี ผูกดวงที่ล้มและลุกขึ้นฟื้นมามั่งมี
                </p>
                <p className="text-white">
                  ด้วยศารตร์การผูกดวง พร้อมเลขคู่ธาตุมงคล เลขคู่ธาตุมงคล + ยันต์
                  15 ฟันลั่นหนุนดวง และยันต์พิชัยสงคราม
                </p>
              </div>

              <div className="mt-5">
                <Link to="/product" className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
