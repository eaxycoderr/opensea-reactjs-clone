import "./banner.css";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useOnClickOutside from "../../components/use-onclick-outside";
import { useRef, useState } from "react";
import Modal from "../modal/Modal";

const Banner = () => {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState(false);

  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModal(false));

  return (
    <div className="bannerContainer">
      <div className="BlurBg"></div>
      <div className="banner">
        <div className="in-banner">
          <div className="article">
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <span>
              OpenSea is the world's first and largest NFT marketplace
            </span>
            <div className="bannerButton">
              <Link className="site_button exploreBtn" to="/explore-collections">
                Explore
              </Link>
              <Link className="site_button createBtn" to="/login">
                Create
              </Link>
            </div>
            <Link to="/#meetopensea" className="learnMoreBanner">
              <PlayCircleIcon />
              Learn more about OpenSea
            </Link>
          </div>
          <div className="rightBanner">
            <div className="imgContainer">
              <img
                src="https://lh3.googleusercontent.com/ww-PqtSiBG7aCNk4lAqw-ibenlcLKdmqsoCXenDDDagM2W9rQHoDVVzAoQBe9QQhElfy44G5u77ujePfWL8WtUkV05f_bAo6BR7Q=s550"
                alt=""
              />
            </div>

            <div className="bDIfooter">
              <div className="bDIfooterL">
                <div className="avatar">
                  <img
                    src="https://lh3.googleusercontent.com/MdzbUk4VGorz-pLhNI9d1NqcXsnpRSyBxyuV7sSv2POaA-LBXt8EhFcoghQMDmSUL3yvYNTCsuQayQM93HHJYmj65i_ccyc-9ikB=s80"
                    alt=""
                  />
                </div>
                <div className="nftsTitleDesc">
                  <h1 className="title">Butterfly Sunset Queens</h1>
                  <span className="desc">JuanaVies</span>
                </div>
              </div>
              <InfoOutlinedIcon
                className="bannerInfo"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setModal(!modal)}
              />
              {isShown && (
                <p className="tool_lip">Get featured on the homepage</p>
              )}
              {modal && (
                <Modal setModal={setModal} ref={ref} />
              )}

            </div>
          </div>
        </div>
        <Link
          to="/#meetopensea"
          className="learnMoreBanner Mobile_learnMoreBanner"
        >
          <PlayCircleIcon />
          Learn more about OpenSea
        </Link>
      </div>
    </div>
  );
};

export default Banner;
