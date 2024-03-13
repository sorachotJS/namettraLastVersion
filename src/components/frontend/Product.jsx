import React from "react";
import "./css/product.css";
import imgMock from "../../assets/imgNamettra/mockup/iphone-x-mockup-removebg-preview.png";
import imgMock1 from "../../assets/imgNamettra/mockup/iphone-x-mockup__1_-removebg-preview.png";
import imgMock2 from "../../assets/imgNamettra/mockup/iphone-x-mockup__2_-removebg-preview.png";
import imgMock3 from "../../assets/imgNamettra/mockup/iphone-x-mockup__3_-removebg-preview.png";
import imgMock4 from "../../assets/imgNamettra/mockup/iphone-x-mockup__4_-removebg-preview.png";
import imgMock5 from "../../assets/imgNamettra/mockup/iphone-x-mockup__5_-removebg-preview.png";
import imgMock6 from "../../assets/imgNamettra/mockup/iphone-x-mockup__6_-removebg-preview.png";
import imgMock7 from "../../assets/imgNamettra/mockup/iphone-x-mockup__7_-removebg-preview.png";
import imgMock8 from "../../assets/imgNamettra/mockup/iphone-x-mockup__8_-removebg-preview.png";
import imgMock9 from "../../assets/imgNamettra/mockup/iphone-x-mockup__9_-removebg-preview.png";

const Product = () => {
  return (
    <>
      <div className="flex flex-col mt-5 mb-5 max-width max-[640px]:flex-row">
        <div className="detailPro">
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock8} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันอาทิตย์</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันจันทร์</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock9} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันอังคาร</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock7} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันพุธ(กลางวัน)</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock5} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันพุธ(กลางคืน)</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock2} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันพฤหัสบดี</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock1} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันศุกร์</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={imgMock6} alt="imgMock" className="mock" />
            <p className="text-center text-white">วันเสาร์</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col mt-5 text-center">
          <h1 className="text-white">
            สัตว์ประจำวันเกิด 
          </h1>
        </div>

        <div className="detailWall">
          <img src={imgMock8} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">พญาครุตสีทอง </h3>
            <h4 className="subHeadSun">สำหรับคน เกิดวันอาทิตย์</h4>
            <h6 className="sdetail">
              แสดงถึงอำนาจ ฉลาด และรวดเร็ว หนุนดวงปลุกพลังอานาจเงินทอง
              อัดแน่นศิริมงคล เต็มไปด้วยอักขระยันต์
              แสดงถึงแสงสว่างยิ่งใหญ่ในช่วงกลางวัน
              นำพาแสงแห่งโชคชะตาเป็นใหญ่ในช่วงกลางคืน หนุนคนเกิดวันอาทิตย์ด้วย
              รวยแล้วรวยยิ่งขึ้นอีก ด้วยยันต์เรียกทรัพย์
              ผนึกคาถาเรียกโชคลาภเงินทอง พร้อมเลข
              คู่มิตรเฉพาะตัวประจำวันเกิดทั้ง 4 คู่ แก้เคล็ดคนเกิดวันอาทิตย์
              เสริมพื้นฐานดวงด้วย ยันต์สาริกา นำพาเมตตามหานิยม
              คนรักใคร่เจรจาค้าขายไม่มีติดขัด{" "}
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>

          <img src={imgMock} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">พญาเสือขาว </h3>
            <h4 className="subHeadMon">สำหรับคนเกิด เกิดวันจันทร์</h4>
            <h6 className="sdetail">
              แสดงถึงอำนาจ ใจดีนุ่มนวล พริวไหว แต่ดุดันหากเอาจริงเอาจัง
              เสน่ห์ดึงดูผู้คน บรรดาลความสำเร็จเมื่อต้องการสิ่งใด
              มักจะสมหวังปรารถณา ด้วยมานะตน ไม่ย่อท้อต่ออุปสรรค์
              ที่มาพร้อมสัญลักษณ์มงคล เช่น ยะกะ
              ปกป้องคุ้มครองภัยจากศัตรูให้สะท้อนกลับ กะยะ สัญลักษณ์
              แห่งการดึงดูดทรัพย์ ดึงดูผู้คน เสริมเสน่ห์ ทวีคุณความสำเร็จด้วย
              พญาเสือขาวพริ้วไหวอ่อนช้อย
              ทั้งสองตัวรายล้อมปกป้องดวงชะตาให้แคล้วคลาดปลอดภัย{" "}
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detailWallOneTues">
          
          <div>
            <h3 className="textHead">พญาสีหราช ราชสีห </h3>
            <h4 className="subHeadTues">สำหรับคน เกิดวันอังคาร</h4>
            <h6 className="sdetail">
              ฉลาดหลักแหลมว่องไวแก้ปัญหาเฉพาะหน้าได้ดี แสดงถึงความเข้มแข็ง
              น่าเกรงขาม ยศตำแหน่งโต เสริมธาตุประจำวันเกิด
              ด้วยพื้นหลังสีประจำพระราหู คู่ธาตุลม พร้อมยันต์หัวใจธาตุ ธรณี
              เปิดสง่าราศีให้เป็นที่รักแด่เทวดาทั้งปวง
              เขี้ยวสีหราชบ่งบอกถึงความดุดันเข้มแข็ง
              สำเร็จลุล่วงพร้อมปกป้องขจัดสิ่งชั่วร้ายอำนาจมนต์ดำ
              ปิดท้ายด้วยันต์อาคม ยะกะ ปกป้องคุ้มครองภัยจากศัตรูให้สะท้อนกลับ
              กะยะ สัญลักษณ์ แห่งการดึงดูดทรัพย์ ดึงดูดผู้คน เสริมเสน่ห์
              และยันต์จีเลจี เมตตามหารวย รวยแล้วรวยอีก
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>
          <img src={imgMock9} alt="imgMock" className="mock" />
        </div>
      </div>

      <div className="container">
        <div className="detailWall">
          <img src={imgMock5} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">อัณฑชะ (ไก่) จิกทรัพย</h3>
            <h4 className="subHeadWen2">สำหรับคน พุธ(กลางคืน)</h4>
            <h6 className="sdetail">
              สัญลักษณ์ที่เต็มไปด้วยความมงคล อุดมสมบูรณ์ ยันต์เมตตาปิยังมะมะ
              คนรักชอบดูดเงินดูดทองเข้าหาผู้ครอบครอง
              เสริมบารมีด้วยสีเขียวประจำวันเกิด
              สีน้ำตาลปูพื้นฐานวอลเปเปอร์ด้วยยันต์นะกะ สะท้อนสิ่งไม่ดี
              ลักษณะไก่มงคล ปากแหลม : ใช้จิกเงิน ทรัพย์สิน การเจรจาเป็นเลิศ
              พูดแล้วได้เงิน ขาขุ้นเงินทอง อาชีพการงานเจริญรุ่งเรืองขยันทำกิน
              หางคันธนู ฝ่าฟันอุปสรรค์ ทั้งปวง พ่วงคาถาเรียกทรัพย์ล้อมองค์
              อัณฑชะ (ไก่) ล้อมตัวไก้ไว้เรียกทรัพย์เพิ่มอีกทวีคูน
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>

          <img src={imgMock7} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">ไอยรา </h3>
            <h4 className="subHeadWen1">สำหรับคนเกิด พุธ(กลางวัน)</h4>
            <h6 className="sdetail">
              สัตว์มงคลคู่บุญบารมี คนเกิดวันพุธที่สง่างาม แสดงถึงความยิ่งใหญ่
              มั่นคง ความอุดมสมบูรณ์ ร่ำรวย และประสบความสำเร็จ มีมิตรมากมาย
              ด้วยรูปลักษณ์ที่งดงามและ สัญลักษณ์ ของพญาคชสาร
              มงคลจะหนุนนำดวงชะตาผู้ครอบครอง ให้สำเร็จ เช่น พูหูช้าง
              ปัดเป่าอุปสรรค์ ปัญหาชีวิตให้หลุดพ้นไป ตามหาเสน่ห์
              ต่อเพศตรงข้ามมองกาลไกลไหวพริบดี งวง งา มหาอำนาจบาร
              หนุนนำวาสนาสูงส่ง มีฉลาดหลักแหลม บนพื้นเขียวแห่งความอุดมสมบูรณ์
              พระจันทร์คู่มิตรของดาวพุธ
              รองพื้นฐานดวงให้สว่างไสวเป็นสง่าและยิ่งใหญ่มากยิ่งๆ ขึ้นไป
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detailWallOne">
          <img src={imgMock2} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">ภูมรา แมลงภู่คำ </h3>
            <h4 className="subHeadThurs">สำหรับคนเกิด พฤหัสบดี</h4>
            <h6 className="sdetail">
              แมลงภู่คำเป็นสัตว์ที่แสดงถึงความเป็นที่รักใคร่ เสน่ห์แห่งแรงดึงดูด
              มิตรสหายห้อมล้อม นับเป็นเอกทางโชคลาภ เมตตา
              ส่งเสริมดวงชะตาให้มั่งคั่ง ทั้งทรัพย์สิน ยศถาบรรดาศักดิ์
              เป็นที่รักใคร่เอ็นดูของผู้คนทั้งหลาย อีกทั้งยังป้องกันคุณไสยมนต์ดำ
              ท้องอิ่มแน่น แสดงถึงความอิ่มเอม อิ่มสุข เป็นสุข ปีกแข็ง
              คอยปกป้องคุ้มภัย ดวงตากว้าไกล อนาคตสดในน
              มองเห็นเห็นสิ่งใดเป็นเงินเป็นทอง
              อักขระเลยันต์ที่เป็นมงคลต่อผู้ครอบครอง ยันต์ดอกบัวสวรรค์
              หนุนนำโชคชะตาไม่ตกอับ ยันต์กะยะเมตตา เสน่ห์ดึงดูด ยันเน พระอาทิตย์
              ส่องแสงสว่างเจิดจ้า ยันต์ละดู่ พระจันทร์ สงบและยิ่งใหญ่ ยันต์กะยะ
              ยะกะ เปิดดวงทรัพย์ ปกป้องคุ้มครองภัยสะท้อนกลับ
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detailWall">
          <img src={imgMock1} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">สาริกาลิ้นทองคู่รัก</h3>
            <h4 className="subHeadWen2">สำหรับคน ศุกร์</h4>
            <h6 className="sdetail">
              สาริกาลิ้นทองเสริมเสน่ห์ เมตตา และโชคลาภ
              เหมาะแก่พ่อค้าแม่ค้าเพื่อเสริมเสน่ห์ให้เจรจาต่อรองได้ประโยชน์มากที่สุด
              นอกจากนี้ยังเสริมดวงเพิ่มความมั่นใจ พูดอะไรใครก็เชื่อ
              มีแต่คนรักคนหลง ผู้ใหญ่รักเอ็นดูเมตตา คาถาหัวใจสาริกาคู่รัก
              หัวใจนกสาริกามัดรวมใจเป็นหนึ่งเดียว ผู้ใจไม่ให้ไขว่เขว ทั้ง2
              จิกลูกแก้วสารพัดสึก ปากหวานคิดได้ดั่งใจ ขอสิ่งใดสมปรารถนา
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>

          <img src={imgMock6} alt="imgMock" className="mock" />
          <div>
            <h3 className="textHead">พญานาคเกี้ยว </h3>
            <h4 className="subHeadWen1">สำหรับคนเกิด เสาร์</h4>
            <h6 className="sdetail">
              เมตตามหานิยม ให้มีเสน่หามิรู้คลายเป็นที่รักแก่ผู้พบเห็น
              เป็นที่ชื่นชมนิยมชมชอบ ศัตรู กลายเป็นมิตรคุ้มครอง
              ป้องกันอาถรรพ์มนต์ดำคุณไสยภูตผี เจรจาธุรกิจการ ค้าขายราบรื่น
              ซื้อง่ายขายคล่องเจริญรุ่งเรือง ขดตัวเป็นเลข 8
              หมายถึงความมั่งมีไม่สิ้นสุด คาบลูกแก้วพญานาค ดูดทรัพย์อธิษฐาน
              สมดั่งปากปรารถนา ปกป้องคุ้มภัยโดดศาสตร์ยันต์มงคล
              พร้อมพื้นสีประจำดวงวันเสาร์
            </h6>
            <div className="mt-5">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded btn1 hover:bg-blue-700 ">
                  สั่งซื้อ
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
