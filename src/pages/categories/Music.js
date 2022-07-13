import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/solanaData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./cateories.css";
import { useState } from "react";

const Music = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDdeh.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Music</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            Music NFTs are changing the way fans connect with their favorite
            artists. From 3LAU to Imogen Heap, all kinds of creators are
            innovating on the blockchain, and the appetite for change in an
            industry that so often underserves independent makers is clear.
          </p>
          <p>
            Browse collections from The Weeknd, Richie Hawtin, RAC, and more.
          </p>
        </div>
        <button
          className="sCateG_descExpand"
          onClick={() => setExpandDesc(!expandDesc)}
        >
          {expandDesc ? (
            <KeyboardArrowUpIcon className="aRdown" />
          ) : (
            <KeyboardArrowDownIcon className="aRdown" />
          )}
        </button>
      </div>
      <div className="container sMain">
        <h3 className="cont">Trending collections in Music</h3>
        <div className="inSCateG">
          {solanaTrendingCollections.map((trendingData) => {
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
        </div>
      </div>
    </div>
  );
};

export default Music;
