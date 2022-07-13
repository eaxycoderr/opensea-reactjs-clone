import "./modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Modal = (props) => {

  return (
    <div className="modalOverlay">
      <div className="modal">
        <div className="modalHeader">
          <h1>Get featured on the homepage</h1>
          <CloseIcon className="closeIcon" onClick={() => props.setModal(false)} />
        </div>
        <div className="modalArticle">
          <ol>
            <li><strong>Create</strong> your NFT on OpenSea</li>
            <li><strong>Post</strong> a link to your NFT on Twitter or Instagram</li>
            <li><strong>Include</strong> @OpenSea and #OpenSeaNFT in your post</li>
            <li>
              We'll periodically review these NFTs and select one to feature
            </li>
          </ol>
          <p>
            Be sure to <strong>follow us on Twitter and Instagram</strong> to receive updates on
            our featured NFTs.
          </p>
        </div>
        <div className="modalFooter">
          <Link className="site_button" to="/explore-collections">
            <TwitterIcon/> &nbsp;Twitter
          </Link>
          <Link className="site_button" to="/explore-collections">
            <InstagramIcon className="modalF_icon"/> &nbsp;Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
