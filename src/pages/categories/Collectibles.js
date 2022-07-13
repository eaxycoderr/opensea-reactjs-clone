import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/solanaData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./cateories.css";
import { useState } from "react";

const Collectibles = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDSc8.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Collectibles</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            The way we value internet-native items is changing with the
            development of blockchain technology. Kittens, punks, and memes are
            now trading digital wallets for cryptocurrencies, and the online
            collectibles market is taking shape before our eyes.
          </p>
          <p>
            Scarce digital property is cropping up in all kinds of industries
            around the world, and OpenSea is on a mission to house internet
            goods from all corners of the ecosystem. Own, buy, and sell rare and
            exclusive NFTs from CryptoKitties, Axie Infinity, and beyond.
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
        <h3 className="cont">Trending collections in Collectibles</h3>
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

export default Collectibles;
