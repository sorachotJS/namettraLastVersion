import React, { useEffect } from 'react'
import mockup1 from "../../assets/imgNamettra/wall-removebg-preview.png";
import produc1 from "../../assets/imgNamettra/product1.png";
import Product from "../../components/frontend/Product";

const ProductNormal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <> 
      
    <div className="auto-container1">
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
              <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                สั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <img src={produc1} alt="" />
    </div>
       <Product />
      
   
    </>
  )
}

export default ProductNormal