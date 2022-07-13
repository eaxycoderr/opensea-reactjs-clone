import { Link } from "react-router-dom";
import "./sEig.css";

const Seig = () => {
  return (
    <div className="sEig">
      <div className="titleD">
        <p className="sTitle">Meet OpenSea</p>
        <p>The NFT marketplace with everything for everyone</p>
      </div>
      <div className="container inSeig">
        <div className="iframeVidBox">
          <div className="inIframeVidBox">
            <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            frameborder="0"
            height="315"
            className="mdndnd"
            sandbox="allow-same-origin allow-scripts allow-presentation"
            src="https://www.youtube.com/embed/gfGuPd1CELo?playlist=gfGuPd1CELo&amp;autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0"
            title="Meet OpenSea"
            width="560"
          ></iframe>
          </div>
        </div>
        <div className="sEig-btn">
          <Link className="site_btn" to="/explore-collections">
            Explore the marketplace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seig;
