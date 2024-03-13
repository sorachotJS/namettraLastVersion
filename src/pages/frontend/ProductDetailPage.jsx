import React, { Suspense, useEffect } from "react";
import mockup1 from "../../assets/imgNamettra/wall-removebg-preview.png";
import produc1 from "../../assets/imgNamettra/product1.png";
import mockup2 from "../../assets/imgNamettra/monk-removebg-preview (1).png";
import { useParams } from "react-router-dom";
// import "./mockup.css";

import Product from "../../components/frontend/Product";
import ProductMonk from "../../components/frontend/ProductMonk";

const ProductDetailPage = () => {
    let { type } = useParams();
    function Loading() {
      return <h2>🌀 Loading...</h2>;
    }

    
    
  return (
    <Suspense fallback={<Loading />}>
    <>
    {type === "monk" ? (<>
     
        <div className="auto-container1">
        <div className="clearfix row">
          {/* Content Column */}
          <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <img src={mockup2} alt="mockup1" width={400} height={400} />
            </div>
          </div>
          <div className="mt-10 content-column col-lg-6 col-md-12 col-sm-12">
            <div className="mt-5 text-center inner-column">
              <div className="mt-5 sec-title">
                <h2 className="text-white">NA METTRA</h2>
              </div>
              <div className="mt-2 about-years">
                <h3 className="text-white">WALLPAPER พระประจำวันเกิด</h3>
              </div>
              <div className="mt-2 text-box1">
                <p className="text-white">
                  ปลุกพลังชีวิต เสริมดวงชะตา ด้วยภาพพื้นหลังมือถือมงคล
                  เสริมดวงทุกด้าน แคล้วคลาดปลอดภัย มั่งคั่งร่ำรวย สำเร็จสมหวัง
                </p>
                <p className="text-white">
                  ผสานพลังแห่งพระพุทธคุณ ด้วยพระประจำวันเกิด ยันต์มงคล
                  และความสวยงามเข้าไว้ด้วยกัน
                </p>
              </div>

              <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700">
                  สั่งซื้อ
                </button>
              </div>
              <div className="clearfix row">
                {/* Content Column */}
                
                <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="mt-2 text-left inner-column">
                   
                    <div className="mt-2 text-box1">
                      <h4 className="text-white text-bold">
                      ยันต์ 15 ฟ้าลั่น 

                      </h4>
                      <p className="text-white">
                      มีพุทธคุณครอบจักรวาล เชื่อกันว่าช่วยเสริมดวงในทุกด้าน  แคล้วคลาดปลอดภัย  ป้องกันภัยอันตราย  ขจัดอุปสรรค  เสริมโชคลาภ  มหาอำนาจ  เมตตามหานิยม
                      </p>
                    </div>

                   
                  </div>
                </div>
                <div className="mt-5 content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="mt-2 text-left inner-column">
                   
                    <div className="mt-2 text-box1">
                      <h4 className="text-white">
                      ยันต์พิชัยสงคราม 
                      </h4>
                      <p className="text-white">
                      เชื่อกันว่าช่วยเสริมดวงด้านอำนาจ บารมี ชัยชนะ  ป้องกันภัยอันตราย  แคล้วคลาดปลอดภัย  เหมาะสำหรับผู้ที่มีหน้าที่การงานต้องเผชิญกับอุปสรรค  หรือผู้ที่ต้องการความสำเร็จในชีวิต
                      </p>
                    </div>

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProductMonk />
       </>)
      
      : 
      
      (<> 
      
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
        
     
      </>)} 
   

     

     
    </>
    </Suspense>
  );
};

export default ProductDetailPage;
