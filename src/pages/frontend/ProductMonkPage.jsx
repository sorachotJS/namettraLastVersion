import React,{useEffect} from 'react'
import mockup2 from "../../assets/imgNamettra/monk-removebg-preview (1).png";
import ProductMonk from "../../components/frontend/ProductMonk";

const ProductMonkPage = () => {
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
    </>
  )
}

export default ProductMonkPage