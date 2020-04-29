import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__yellow-block">
          10% off online bookings! Use the code FOXFIT
        </div>
        <div className="header__logo-block">
          <div className="header__logo-block__logo-content logo-content">
            <img
              className="logo-content__image"
              src="./src/images/yellow-blue-logo.png"
              alt=""
            />
            <span className="logo-content__text">Emily Fox Fitness</span>
            <div className="logo-content__mobile-menu">
              <div className="logo-content__mobile-menu_block">
                <span className="logo-content__mobile-menu_item"></span>
                <span className="logo-content__mobile-menu_item"></span>
                <span className="logo-content__mobile-menu_item"></span>
              </div>
            </div>
          </div>
          <nav className="header__logo-block__link-content link-content">
            <Link to="/">
              <div className="link-content__links link-content__home">
                <span>Home</span>
              </div>
            </Link>
            <Link to="/meet">
              <div className="link-content__links link-content__meet-emely">
                <span>Meet Emily</span>
              </div>
            </Link>
            <Link to="/foxfit">
              <div className="link-content__links link-content__fox-fit">
                <span>Fox Fit</span>
              </div>
            </Link>
            <Link to="/pricing">
              <div className="link-content__links link-content__plans">
                <span>Plans & Pricing</span>
              </div>
            </Link>
            <Link to="/contact">
              <div className="link-content__links link-content__contact">
                <span>Contact</span>
              </div>
            </Link>
            <Link to="/login">
              <div className="link-content__links link-content__log-in">
                <img
                  className="link-content__log-in__image"
                  src="./src/images/log-in.png"
                  alt=""
                />
                <span className="link-content__log-in__text">Log In</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="header__call-us">
          <div className="header__call-us_icon"></div>
        </div>
      </header>
    );
  }
}
