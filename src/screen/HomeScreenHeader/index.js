/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./headerstyle.css";
import CustomIcons from "../../utils/icons";

function HomeScreenHeader() {
  return (
    <div>
      <div className=" head-style">
        <div className="heading-style">
          <span>ORDER TODAY TILL 9 PM FOR TOMORROW MORNING DELIVERY</span>
        </div>
        <div className="header-left-style">
          <div className="DropDown-style">Dubai</div>
          <div className="tmr-delivery">
            <img
              src={CustomIcons.delivery}
              alt="truck icon"
              className="truck-icon"
            />
            <span className="tmr-style">Tommorrow</span>
          </div>
          <div className="time-style">9AM-3PM</div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo-ctn">
          <img
            src={CustomIcons.logo}
            alt="barakat-logo"
            className="logo-style"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <img
            src={CustomIcons.search}
            alt="search-icon"
            className="searchIcon-style"
          />
        </div>
        <div className="signIn-ctn">
          <div>العربية</div>
          <div className="ctn">
            <span>Sign In</span>
            <img
              src={CustomIcons.profile}
              alt="profile-icon"
              className="profileIcon-style"
            />
          </div>
          <div>Cart</div>
          <img
            src={CustomIcons.cart}
            alt="Cart-icon"
            className="cartIcon-style"
          />
        </div>
      </div>
      <div className="header-bottom"></div>
    </div>
  );
}
export default HomeScreenHeader;
