import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../../slickSliderSettings";
import "./sSix.css";

const Ssix = () => {
  return (
    <div className="container sSix">
      <h2 className="sTitle">Resources for getting started</h2>
      <div className="inSsix">
        <Slider {...settings}>
          <Link to="blog/learn/how-to-easily-setup-a-metamask-wallet/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWZur0.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How to Easily Setup a MetaMask Wallet</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-fund-metamask-with-eth/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWzVEq.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How to Fund MetaMask with ETH</p>
              </div>
            </div>
          </Link>
          <Link to="blog/learn/how-to-find-an-nft-you-love/">
            <div className="inSsixBox">
              <div className="inSsixBoxImg">
                <img src="https://i.im.ge/2022/07/07/uWBBOq.png" alt="" />
              </div>
              <div className="inSsixBoxTxt">
                <p>How to Find an NFT You Love</p>
              </div>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Ssix;
