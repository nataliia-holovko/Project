import React,
  {
  Component
}

from "react";

import {
  Link
}

from "react-router-dom";
import "./MobileMenu.scss";

export class MobileMenu extends Component {
  render() {
    return (<div className="logo-content__mobile-menu"> <div className="logo-content__mobile-menu_block"> <section className="mobile-menu"> <div className="mobile-menu__wrapper"> <nav className="mobile-menu__link-content "> <div className="mobile-menu__close"></div> <Link to="/login"> <div className="mobile-menu__link-content_item mobile-menu__log-in"> <img className="link-content__log-in__image"
      src="./src/images/log-in.png"
      alt=""
      /> <span className="link-content__log-in__text">Log In</span> </div> </Link> <Link to="/"> <div className="mobile-menu__link-content_item"> <span>Home</span> </div> </Link> <Link to="/meet"> <div className="mobile-menu__link-content_item"> <span>Meet Emily</span> </div> </Link> <Link to="/foxfit"> <div className="mobile-menu__link-content_item"> <span>Fox Fit</span> </div> </Link> <Link to="/pricing"> <div className="mobile-menu__link-content_item"> <span>Plans & Pricing</span> </div> </Link> <Link to="/contact"> <div className="mobile-menu__link-content_item"> <span>Contact</span> </div> </Link> </nav> </div> </section> <span className="logo-content__mobile-menu_item"></span> <span className="logo-content__mobile-menu_item"></span> <span className="logo-content__mobile-menu_item"></span> </div> </div>);
  }
}