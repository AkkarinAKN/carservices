import "./contentStyle.css";
import imgPattaya from "../assest/pattaya.jpg";
import imgBangkok from "../assest/bangkok.jpg";
import imgHuaHin from "../assest/hin.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="contentContainer">
        <div className="contentGrid">
          <a href="#" className="grid-items">
            <h2>Go To Bangkok</h2>
            <p>Start 700 BAHT</p>
            <h2 className="title">Bangkok</h2>
            <p>
              Bangkok has many tourist attractions in many forms, both
              religious. Shopping Various shopping centers or night services
              such as the Grand Palace, Siam Square, Khaosan Road.
            </p>
            <div className="border-img">
              <img src={imgBangkok} alt="" />
            </div>
          </a>

          <a href="#" className="grid-items">
            <h2>Airport To Pattaya</h2>
            <p>Start 1,000 BAHT</p>
            <h2 className="title">Pattaya City</h2>
            <p>
              Pattaya is a coastal city on the Gulf of Thailand located on the
              eastern side of the country. There are beautiful beaches known
              among tourists.
            </p>
            <div className="border-img">
              <img src={imgPattaya} alt="" />
            </div>
          </a>

          <a href="#" className="grid-items">
            <h2>Airport To Hua Hin</h2>
            <p>Start 1,800 BAHT</p>
            <h2 className="title">Hua Hin</h2>
            <p>
              Hua Hin is one of the important resort tourism areas of Thailand
              and the world. just like Pattaya Chonburi
            </p>
            <div className="border-img">
              <img src={imgHuaHin} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
