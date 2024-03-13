import React from "react";
import imageAbout from "../../assets/images/resource/signature.png";
import imageService1 from "../../assets/images/resource/service-1.jpg";
import { Carousel } from "antd";
import imgSlide1 from "../../assets/images/numerology-collage-concept.jpg";
import ServiceComponent from "../../components/frontend/ServiceComponent";
import WallpaperComponent from "../../components/frontend/WallpaperComponent";
import AdminComponent from "../../components/frontend/AdminComponent";
import BookingComponent from "../../components/frontend/BookingComponent";
import Section3 from "../../components/frontend/Section3";
import Section4 from "../../components/frontend/Section4";
import Section5 from "../../components/frontend/Section5";
import line from "../../assets/imgNamettra/line-removebg-preview.png";
import imgSec1 from "../../assets/imgNamettra/240307_1-removebg-preview.png";
import logoname from "../../assets/imgNamettra/logoName.png";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  top: "0",
  left: "0",
  width: "100%",
  // background: '#364d79',
  backgroundImage: `url(${imgSlide1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  position: "relative",
  zIndex: "1",
};

const HomePage = () => {
  return (
    <>
      <div className="bg-black">
        <section className="banner-section">
         <h1>NA METTRA</h1>
        <div className="imgLogo">
        <img src={logoname} alt="logo" />
        </div>
        </section>
        {/*END Banner Section */}
        {/* About Us */}
        <section className="about-us1">
          <div className=" auto-container">
            <div className="textBg">
            <p>Wallpaper หนึ่งเดียวที่ช่วย ปรับหนุนดวง แก้กรรม</p><p> ปรับร้านกลายเป็นดี ผูกดวงที่ล้มและลุกขึ้นฟื้นมามั่งมี</p>
            </div>
            <div className="mt-1">
                <button className="px-5 py-2 font-bold text-white border rounded w-72  max-[640px]:px-2">
                  สั่งซื้อ
                </button>
              </div>
          </div>
        </section>

        <section className="about-us">
          <div className="auto-container">
            <div className="clearfix row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>อ.ช้าง วธันญา อาธิพรม</h2>
                  </div>
                  <div className="about-years">
                    <h3>
                      ประสบการณ์กว่า <span className="years">35</span> ปี
                    </h3>
                  </div>
                  <div className=" text-box">
                    <p>
                      หมอดูสอดเซ้น หมอดูที่มีศาสตร์เป็นของตัวเอง 
                      เปิดเผยตัวตนชัดเจน คลายปม พลิกชีวิต หมดทุกข์
                      ทำให้ดวงเปิด อุดมทรัพย์ เงินทองไม่ขาดมือ ครอบครัวอบอุ่น
                      ดูดวงให้ผู้ใหญ่ระดับประเทศมากมาย ดาราหลายคน
                      ประสบการณ์มากกว่า 40 ปี{" "}
                    </p>
                  </div>
                  <div className="text-box">
                    <p>
                      ศาสตร์การสอดเซ้น คือการใช้จิตสัมผัสของอาจารย์ที่สอดเส้น
                      สัมผัสเซ้นส์ของลูกศิษย์ผ่านฝ่ามือของลูกศิษย์ในขณะที่สื่อจิตของลูกศิษย์และอาจารย์เพื่อเปิดดวงของลูกศิษย
                      การสอดเส้นขึ้นอยู่กับสิ่งศักดิ์สิทธิ์ประจำตัว
                      และเจ้ากรรมนายเวรของลูกศิษย์ด้วยว่าจะให้อาจารย์สื่อจิตเรื่องอะไรบ้าง
                      บางคนก็ไม่สามารถสื่อจิตได้
                      เป็นศาสตร์เฉพาะตัวของอาจารย์จริงๆ
                      ที่สืบทอดมาจากอาจารย์ของอาจารย์
                      แม่ชนิกาอาจารย์ท่านชื่ออาจารย์รัตนศาสตร์บุญศรี
                      อาจารย์วศัญญาเรียนวิชาใช้พลังจักรวาลซึ่งเป็นพลังงานของจักระ
                      อาจารย์จะใช้จักระที่ 6 ซึ่งเป็นตาที่ 3
                      ในการสอดเส้นดูดวงจิตสัมผัสให้กับลูกศิษย์ด้วย
                      ทำให้การสอดเส้นเร็วขึ้นและชัดเจนยิ่งขึ้น
                      อาจารย์จะใช้จักระที่ 6
                      ในการลงนะหน้าทองให้กับลูกศิษย์ซึ่งได้ผลดีมากยิ่งขึ้นด้วย
                    </p>
                  </div>
                  {/* <ul className="list-style-one">
                    <li>Quis nostrud exer citation.</li>
                    <li>Exercitation ullamco laboris nis.</li>
                    <li>Commodo consequat duis autex.</li>
                  </ul> */}
                  <div className="clearfix bottom-box">
                    <div className="justify-center text-center signature">
                      <img src={line} alt='logoline' width={200} height={200}/>
                    </div>
                   
                    {/* <div className="btn-box">
                   
                      <a href="about.html" className="theme-btn btn-style-one">
                      <img width="40" height="40" src="https://img.icons8.com/plasticine/100/line-me.png" alt="line-me"/>
                        <span className="mr-3 btn-title" >@doodoo</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                 <img src={imgSec1} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us */}
       <Section3 />
       <Section4 />
       <Section5 />
        {/* Services Section */}

        {/* <ServiceComponent /> */}

        {/* End service Section */}
        {/* Projects Section */}

        {/* <WallpaperComponent /> */}
        {/* End Projects Section */}
        {/* Team Section */}
        {/* <AdminComponent /> */}
        {/*End Team Section */}

        {/* Offer Section */}
        {/* <BookingComponent /> */}
        {/*End Offer Section */}
        {/* News Section */}
       
      </div>
    </>
  );
};

export default HomePage;
