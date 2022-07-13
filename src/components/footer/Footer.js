import FooterSocialSvg from "./FooterSocialSvg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="topFooter">
        <div className="inTf-top">
          <div className="inTf-topBox">
            <h3 className="fhH3">Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div className="fInput">
              <input type="email" placeholder="Your email address" />
              <button className="site_button">Sign up</button>
            </div>
          </div>
          <div className="inTf-topBox dhh">
            <h3 className="fhH3">Join the community</h3>
            <FooterSocialSvg />
          </div>
        </div>
      </div>
      <div className="middleFooter">
        <div className="mfLeft">
          <p><img src="https://i.im.ge/2022/07/08/ukyYTX.png" alt="" /></p>
          <Link to="">OpenSea</Link>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>
        <div className="mfRight">
          <div className="mfRbox mfbox2">
            <h3>Marketplace</h3>
            <ul>
              <li><Link to="/assets">All NFTs</Link></li>
              <li><Link to="/solana-collections">Solana NFTs</Link></li>
              <li><Link to="/category/art">Art</Link></li>
              <li><Link to="/category/collectibles">Collectibles</Link></li>
              <li><Link to="/category/domain-names">Domain Names</Link></li>
              <li><Link to="/category/music">Music</Link></li>
              <li><Link to="/category/photography">Photography</Link></li>
              <li><Link to="/category/sports">Sports</Link></li>
              <li><Link to="/category/trading-cards">Trading Cards</Link></li>
              <li><Link to="/category/utility">Utility</Link></li>
              <li><Link to="/category/virtual-worlds">Virtual Worlds</Link></li>
            </ul>
          </div>
          <div className="mfRbox mfbox3">
            <h3>My Account</h3>
            <ul>
              <li><Link to="/account">Profile</Link></li>
              <li><Link to="/account?tab=favorites">Favorites</Link></li>
              <li><Link to="/my-watchlist">Watchlist</Link></li>
              <li><Link to="/collections">My Collections</Link></li>
              <li><Link to="">Settings</Link></li>
              <li><Link to="/account/settings"></Link></li>
            </ul>
            <h3 className="mfRboxH3">Stats</h3>
            <ul>
              <li><Link to="/rankings">Rankings</Link></li>
              <li><Link to="/activity">Activity</Link></li>
            </ul>
          </div>
          <div className="mfRbox mfbox4">
            <h3>Resources</h3>
            <ul>
              <li><Link to="">Help Center</Link></li>
              <li><Link to="">Platform Status</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/gas-free">Gas-Free Marketplace</Link></li>
              <li><Link to="/tax-resources">Taxes</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="">Docs</Link></li>
              <li><Link to="/blog/newsletter/">Newsletter</Link></li>
            </ul>
          </div>
          <div className="mfRbox mfbox5">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/opensea-ventures">Ventures</Link></li>
              <li><Link to="/opensea-grants">Grants</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div>
          <p>© 2018 - 2022 Ozone Networks, Inc</p>
        </div>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/tos">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
