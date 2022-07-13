import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/solanaData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./cateories.css";
import { useState } from "react";

const Art = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueabRx.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Art</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            An online community of makers, developers, and traders is pushing
            the art world into new territory. It all started with CryptoPunks, a
            set of 10,000 randomly generated punks that proved demand for the
            digital ownership of non-physical items and collectibles in 2017,
            and the market has evolved rapidly ever since.
          </p>
          <p>
            As the underlying technology develops, a growing pool of artists are
            selling verified, immutable works to art lovers and speculators, and
            the space as a whole is waking up to the power and potential of
            decentralized networks and currencies. With creators and collectors
            generating meaningful revenue through an entirely digital ecosystem,
            the tokenization of gifs, memes, and MP4s is emerging as the most
            exciting and relevant blockchain use case. From SuperRare to Josie
            to JOY, browse and trade NFTs from some of the world's top crypto
            artists on OpenSea.
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
        <h3 className="cont">Trending collections in Art</h3>
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

export default Art;
