import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VerifiedIcon from "@mui/icons-material/Verified";
import SearchIcon from "@mui/icons-material/Search";
import {
  assetsData,
  chainDetails,
  categories,
  currency,
  quantity,
} from "../../allData/assetsPage";
import "./sideBarMenu.css";

export default function Status() {
  return (
    <>
      <ul className="inAmSdrop">
        <li>
          <label>
            Buy Now
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            On Auction
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            News
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
        <li>
          <label>
            Has Offers
            <span className="checkB">
              <input type="checkbox" className="checkInput" />
              <DoneIcon className="doneIcon" />
            </span>
          </label>
        </li>
      </ul>
    </>
  );
}

export function Price() {
  return (
    <>
      <ul className="inAmSdrop priceCheck">
        <form action="">
          <div className="inPc">
            <div className="iPbox">
              <input disabled type="text" value="USD" />
              <KeyboardArrowDownIcon className="aRdown" />
            </div>
            <div className="iPboxMl">
              <input type="text" placeholder="Min" />
            </div>
            <span>to</span>
            <div className="iPboxMl">
              <input type="text" placeholder="Max" />
            </div>
          </div>
          <button>Apply</button>
        </form>
      </ul>
    </>
  );
}

export function Quantity() {
  return (
    <>
      <ul className="inAmSdrop quantity">
        {quantity.map((quantities) => {
          return (
            <li>
              <label>
                {quantities.qTxt}
                <span className="checkB">
                  <input
                    type="radio"
                    className="checkInput"
                    value={quantities.qTxt}
                  />
                  <CircleIcon className="circleIcon" />
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function Collections() {
  return (
    <>
      <ul className="inAmSdrop">
        <div className="dropDfilterInpBox">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Filter" />
        </div>
        <div className="sBDropCont">
          {assetsData.map((assetsDatas) => {
            return (
              <li>
                <label>
                  <div className="colCheckList">
                    <div className="cClL">
                      <div className="cClLImg">
                        <img src={assetsDatas.sImg} alt="" />
                      </div>

                      <div className="cClLn_i">
                        <p className="cClLname">{assetsDatas.collectionName}</p>
                        <VerifiedIcon className="verifyIcon" />
                      </div>
                    </div>
                    <div className="cClR">{assetsDatas.totalAssets}</div>
                  </div>
                  <span className="checkB">
                    <input type="checkbox" className="checkInput" />
                    <DoneIcon className="doneIcon" />
                  </span>
                </label>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export function Chains() {
  return (
    <>
      <ul className="inAmSdrop chains">
        {chainDetails.map((chainDetail) => {
          return (
            <li>
              <label>
                <div className="cClL">
                  <div className="cClLImg">
                    <img src={chainDetail.chainImg} alt="" />
                  </div>
                  <p className="cClLname">{chainDetail.chainName}</p>
                </div>
                <span className="checkB">
                  <input type="checkbox" className="checkInput" />
                  <DoneIcon className="doneIcon" />
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function Category() {
  return (
    <>
      <ul className="inAmSdrop category">
        <div className="sBDropCont">
          {categories.map((category) => {
            return (
              <li>
                <label>
                  <div className="cClL">
                    <p className="cClLname">{category.categoryName}</p>
                  </div>
                  <span className="checkB">
                    <input type="checkbox" className="checkInput" />
                    <DoneIcon className="doneIcon" />
                  </span>
                </label>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export function Currency() {
  return (
    <>
      <ul className="inAmSdrop currency">
        <div className="sBDropCont">
          {currency.map((currencies) => {
            return (
              <li>
                <label>
                  <div className="cClL">
                    <p className="cClLname">{currencies.currencyName}</p>
                  </div>
                  <span className="checkB">
                    <input type="checkbox" className="checkInput" />
                    <DoneIcon className="doneIcon" />
                  </span>
                </label>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}
