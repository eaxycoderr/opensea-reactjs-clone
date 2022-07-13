import VerifiedIcon from "@mui/icons-material/Verified";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import { Link } from "react-router-dom";
import EthLogo from "../../assets/eth-logo.svg";
import TopCollectionsData from "../../allData/topCollectionDatas.json";
import "./topCollections.css";

const TopCollections = () => {
  return (
    <div>
      <div className="top-collections">
        <div className="tCbox">
          {TopCollectionsData.map((topData) => {
            return (
              <div key={topData.id}>
                <Link to="">
                  <div className="inTCbox">
                    <div className="left">
                      <span>{topData.id}</span>
                    </div>
                    <div className="middle">
                      <div className="topImgAvatar">
                        <div className="online-icon" />
                        <img src={topData.img} alt="" />
                        <VerifiedIcon className="verify-icon" />
                      </div>
                      <div className="mText">
                        <div className="topCollName">
                          {topData.collectionName}
                        </div>
                        <div className="priceTopColl">
                          <div className="fPtC">Floor price:</div>
                          <div className="pTopColl">
                            <img src={EthLogo} alt="EthLogo" />{" "}
                            {topData.floorPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <span>{topData.sellChart}</span>
                      <div className="pTopColl">
                        <img src={EthLogo} alt="EthLogo" />{" "}
                        {topData.totalVolume}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
