import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../../slickSliderSettings";
import NotableDropData from "../../allData/notableDrop.json";

import "./stw.css";

const Stw = () => {
  return (
    <div className="container sTw">
      <div className="in-sTw">
        <h2 className="sTitle">Notable Drops</h2>
        <div className="slide-show">
          <Slider {...settings}>
            {NotableDropData.map((notableData) => {
              return (
                <Link key={notableData.id} to="">
                  <div className="slideBox">
                    <div className="in-sBc">
                      <img src={notableData.img} alt="" />
                      <div className="in-sBc-top">
                        <p className="PromoCard--sale-time">Live</p>
                      </div>
                      <div className="in-sBc-bottom">
                        <div className="SlideTitle">
                          {notableData.title}
                        </div>
                        <p className="slideDesc">
                          {notableData.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Stw;
