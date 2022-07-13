import { Link } from "react-router-dom";
import BrowseByCategory from "../../allData/browseByCategory.json";
import "./sSev.css";

const Ssev = () => {
  return (
    <div className="container sSev">
      <h2 className="sTitle">Browse by category</h2>
      <div className="inSsev">
        <div className="inSsevContent">
          {BrowseByCategory.map((browseCategory) => {
            return (
              <Link key={browseCategory.id} to={browseCategory.categoryPath}>
                <div className="inSsevBox">
                  <div className="inSsevBoxImg">
                    <img src={browseCategory.img} alt="" />
                  </div>
                  <div className="inSsevBoxTxt">
                    <p>{browseCategory.title}</p>
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

export default Ssev;
