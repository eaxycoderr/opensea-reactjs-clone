import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { solanaTrendingCollections } from "../../allData/solanaData";
import "./solana.css";

const Solana = () => {
  return (
    <div className="sCateG">
      <div className="sBanner">
        <img src="https://i.im.ge/2022/07/13/ueOgv9.png" alt="" />
      </div>
      <div className="container sHeader">
        <h1>Explore Solana NFTs</h1>
        <p>
          Explore, buy and sell popular Solana NFTs on OpenSea's Solana beta,
          and enjoy low gas fees and fast transaction speeds.
          <Link to="/explore-solana"> Learn more about Solana.</Link>
        </p>
      </div>
      <div className="container sMain">
        <h3 className="cont">Trending Collections in Solana</h3>
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

export default Solana;
