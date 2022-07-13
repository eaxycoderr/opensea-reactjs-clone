import { Link } from "react-router-dom";
import "./sFi.css";

const Sfi = () => {
  return (
    <div className="sfi">
      <h2 className="sTitle">Create and sell your NFTs</h2>
      <div className="inSfi">
        <div>
          <img src="https://opensea.io/static/images/icons/wallet.svg" alt="" />
          <p>Set up your wallet</p>
          <p>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            <br />
            <Link to="">wallets we support</Link>
          </p>
        </div>
        <div>
          <img src="https://opensea.io/static/images/icons/collection.svg" alt="" />
          <p>Create your collection</p>
          <p>
            Click<Link to="/collections"> My Collections</Link> and set up your
            collection. Add social links, a description, profile &amp; banner
            images, and set a secondary sales fee.
          </p>
        </div>
        <div>
          <img src="https://opensea.io/static/images/icons/nft.svg" alt="" />
          <p>Add your NFTs</p>
          <p>
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </p>
        </div>
        <div>
          <img src="https://opensea.io/static/images/icons/sale.svg" alt="" />
          <p>List them for sale</p>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sfi;
