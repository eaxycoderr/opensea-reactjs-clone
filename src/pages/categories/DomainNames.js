import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/solanaData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./cateories.css";
import { useState } from "react";

const DomainNames = () => {
  const [expandDesc, setExpandDesc] = useState(false);

  return (
    <div className="sCateG categories">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueDdeh.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Domain Names</h1>
        <div className={`sCateG_description ${expandDesc ? "expand" : ""}`}>
          <p>
            Blockchain domains have two key use cases; turning hexadecimal
            wallet addresses into human-readable names and enabling
            censorship-resistant websites. As a result, trading crypto domains
            is big business for speculators, NFT traders, and metaverse natives
            alike. If the sale of "sex.crypto" for 230 ETH (~$90k) on OpenSea is
            anything to go by, the market could explode as adoption increases
            over the coming months and years.
          </p>
          <p>
            Buy and sell domain names from Ethereum Name Service (ENS),
            Unstoppable Domains, and Decentraland Names on OpenSea.
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
        <h3 className="cont">Trending collections in Domain Names</h3>
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

export default DomainNames;
