import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import AllTrendingData from "../../allData/allTrendingData.json";
import { settings } from "../../slickSliderSettings";
import useOnClickOutside from "../../components/use-onclick-outside";

import "./sF.css";

const SF = () => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsShown(false));

  return (
    <div className="container SF">
      <div className="inSF">
        <div className="inSF-title">
          <h2 className="sTitle">Trending in</h2>
          <div
            className="inSF-timeDropDown"
            onClick={() => setIsShown(!isShown)}
          >
            <p>all categories</p> <KeyboardArrowDownIcon className="djjd" />
            {isShown && (
              <div ref={ref} className="trendingCategories">
                <ul>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnczM.png" alt="" />
                    All Categories
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHn8FY.png" alt="" />
                    Solana NFTs
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnWR4.png" alt="" />
                    Art
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnBW0.png" alt="" />
                    Collectibles
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHn4jW.png" alt="" />
                    Domain Names
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnnOr.png" alt="" />
                    Music
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnf3p.png" alt="" />
                    Photography
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnvzm.png" alt="" />
                    Sports
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnHs1.png" alt="" />
                    Trading Cards
                  </li>
                  <li>
                    <img src="https://i.im.ge/2022/07/09/uHnk4P.png" alt="" />
                    Utility
                  </li>
                  <li className="bRb">
                    <img src="https://i.im.ge/2022/07/09/uHnptf.png" alt="" />
                    Virtual Worlds
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="trending_show_slide">
          <Slider {...settings}>
            {AllTrendingData.map((trendingData) => {
              return (
                <Link key={trendingData.id} to={trendingData.collectionLink}>
                  <div className="trendingBox">
                    <div className="inTbox">
                      <div className="coverImg">
                        <img src={trendingData.coverImg} alt="" />
                      </div>
                      <div className="footerTrendingBox">
                        <div className="avatarImg">
                          <img src={trendingData.avatar} alt="" />
                        </div>
                        <div className="collectionName_verify_icon">
                          <div className="collectionName">
                            {trendingData.collectionName}
                          </div>
                          <VerifiedIcon className="verify-icon" />
                        </div>
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

export default SF;
