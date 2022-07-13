import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RefreshIcon from "@mui/icons-material/Refresh";
import { buttons } from "../../allData/buttons";
import "./assets.css";
import { useState } from "react";
import Status, {
  Category,
  Chains,
  Collections,
  Currency,
  Price,
  Quantity,
} from "../../components/sideCheckBoxBar/SideBarMenu";
import { itemLists } from "../../allData/assetsPage";
import { Link } from "react-router-dom";

const Assets = () => {
  const [openSortBy, setOpenSortBy] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [sideBarDrop1, setSideBarDrop1] = useState(true);
  const [sideBarDrop2, setSideBarDrop2] = useState(false);
  const [sideBarDrop3, setSideBarDrop3] = useState(false);
  const [sideBarDrop4, setSideBarDrop4] = useState(false);
  const [sideBarDrop5, setSideBarDrop5] = useState(false);
  const [sideBarDrop6, setSideBarDrop6] = useState(false);
  const [sideBarDrop7, setSideBarDrop7] = useState(false);
  

  return (
    <div className="assets">
      <div className="assetsHeader">
        <div className="inAssetsHeader">
          <div className="inAhL">
            <button
              className="filter_toggle"
              onClick={() => setOpenSideMenu(!openSideMenu)}
            >
              <FilterListIcon />
            </button>
          </div>
          <div className="inAhR">
            <div className="inAhRL">
              <div
                className="inAhRLuP"
                onClick={() => setOpenSortBy(!openSortBy)}
              >
                <input type="text" disabled placeholder="Sort by" />
                <KeyboardArrowDownIcon className="aRdown"/>
              </div>
              {openSortBy && (
                <div className="sortByDropDown">
                  <ul>
                    <li>Recently listed</li>
                    <li>Recently created</li>
                    <li>Recently sold</li>
                    <li>Recently received</li>
                    <li>Ending soon</li>
                    <li>Price low to high</li>
                    <li>Price high to low</li>
                    <li>Highest last sale</li>
                    <li>Oldest</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="inAhLbtns">
              {buttons.map((btn, index) => {
                return <button key={index}>{btn.icon}</button>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="assetMain">
        {openSideMenu && (
          <div className="assetMainSidebar">
            <div className="inAmS">
              <div>
                <li onClick={() => setSideBarDrop1(!sideBarDrop1)}>
                  <button>
                    <span>Status</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop1 && <Status />}
              </div>

              <div>
                <li onClick={() => setSideBarDrop2(!sideBarDrop2)}>
                  <button>
                    <span>Price</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop2 && <Price />}
              </div>

              <div>
                <li onClick={() => setSideBarDrop3(!sideBarDrop3)}>
                  <button>
                    <span>Quantity</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop3 && <Quantity />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop4(!sideBarDrop4)}>
                  <button>
                    <span>Collections</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop4 && <Collections />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop5(!sideBarDrop5)}>
                  <button>
                    <span>Chains</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop5 && <Chains />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop6(!sideBarDrop6)}>
                  <button>
                    <span>Category</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop6 && <Category />}
              </div>
              <div>
                <li onClick={() => setSideBarDrop7(!sideBarDrop7)}>
                  <button>
                    <span>Currency</span> <KeyboardArrowUpIcon />
                  </button>
                </li>
                {sideBarDrop7 && <Currency />}
              </div>
            </div>
          </div>
        )}

        <div className="assetMainContent">
          <div className="aMcHeader">
            <button>
              <RefreshIcon />
            </button>
            <div className="itemsCounters">46,455,477 items</div>
          </div>
          <div className="aMcDisplay">
            {itemLists.map((itemList) => {
              return (
                <Link to={itemList.colLink}>
                  <div className="aMcDBox">
                    <div className="aMcDBoxImg">
                      <img src={itemList.img} alt="" />
                    </div>
                    <div className="aMcDBoxArticle">
                      <div className="aMcBa">
                        <p>#{itemList.itemNumber}</p>
                        <div className="colName">{itemList.collectionName}</div>
                      </div>
                      <div className="price">
                        <p>price</p>
                        <div className="inPrice"><img src={itemList.chainLogo} alt="" /> {itemList.price}</div>
                      </div>
                      <div className="time">
                        {itemList.time}
                      </div>
                    </div>
                    <div className="buyBtn">
                      <button>Buy Now</button>
                    </div>
                  </div>
                </Link>
                
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
