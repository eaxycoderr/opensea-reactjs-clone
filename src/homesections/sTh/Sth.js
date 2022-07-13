import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../components/use-onclick-outside";
import TopCollections from "../../components/topCollections/TopCollections";
import "./sth.css";


const Sth = () => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsShown(false));

  return (
    <div className="container Sth">
      <div className="inSth">
        <div className="inSth-title">
          <h2 className="sTitle">Top collections over</h2>
          <div
            className="inSth-timeDropDown"
            onClick={() => setIsShown(!isShown)}
          >
            <p>last 24 hours</p> <KeyboardArrowDownIcon className="arrow-_-down" />
            {isShown && (
              <div ref={ref} className="topCollDuration">
                <ul>
                  <li>last 24 hours</li>
                  <li>last 7 days</li>
                  <li className="bRb">last 30 days</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          <TopCollections />
          <div className="goToRankingBtnBox">
            <Link className="site_button goToRankingBtn" to="/rankings">
              Go to Rankings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sth;
