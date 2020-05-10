import React, { Component } from "react";
import "./Pricing.scss";

export class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <section className="pricing__header">
          <h1 className="pricing__header_text">Choose Your Pricing Plan</h1>
        </section>
        <div className="pricing__paragraph">
          <p className="pricing__paragraph_text">
            I tried very hard when I was making this site. Hope you enjoi it
            too!
          </p>
        </div>
        <section className="pricing__pricing-block">
          <div className="pricing__pricing-block_wrapper">
            <ul className="pricing__pricing-block_content">
              <li className="membership-box">
                <div className="membership-box__main-block">
                  <h2 className="membership-box__main-block_header">
                    Silver Membership
                  </h2>
                  <div className="membership-box__main-block_price-block">
                    <span className="membership-box__main-block_item">$</span>
                    <span className="membership-box__main-block_price">30</span>
                  </div>
                  <span className="membership-box__main-block_first-text"></span>
                  <span className="membership-box__main-block_text">
                    Short-term trial for beginners
                  </span>
                  <span className="membership-box__main-block_small-text">
                    Valid for one month
                  </span>
                  <button className="membership-box__main-block_button">
                    Select
                  </button>
                  <div className="membership-box__main-block_pin">v</div>
                </div>
                <div className="membership-box__benefit-block">
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                </div>
              </li>
              <li className="membership-box">
                <div className="membership-box__main-block main-block_best">
                  <button className="membership-box__main-block_top-button">
                    Best Value
                  </button>
                  <h2 className="membership-box__main-block_header">
                    Gold Membership
                  </h2>
                  <div className="membership-box__main-block_price-block">
                    <span className="membership-box__main-block_item">$</span>
                    <span className="membership-box__main-block_price">25</span>
                  </div>
                  <span className="membership-box__main-block_first-text">
                    Every month
                  </span>
                  <span className="membership-box__main-block_text">
                    Ideal for advanced trainees
                  </span>
                  <span className="membership-box__main-block_small-text">
                    Valid for 12 months
                  </span>
                  <button className="membership-box__main-block_button">
                    Select
                  </button>
                  <div className="membership-box__main-block_pin">v</div>
                </div>
                <div className="membership-box__benefit-block benefit-block_best">
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                </div>
              </li>
              <li className="membership-box">
                <div className="membership-box__main-block">
                  <h2 className="membership-box__main-block_header">
                    Platinum Membership
                  </h2>
                  <div className="membership-box__main-block_price-block">
                    <span className="membership-box__main-block_item">$</span>
                    <span className="membership-box__main-block_price">40</span>
                  </div>
                  <span className="membership-box__main-block_first-text">
                    Every month
                  </span>
                  <span className="membership-box__main-block_text">
                    Perfect for committed trainees
                  </span>
                  <span className="membership-box__main-block_small-text"></span>
                  <button className="membership-box__main-block_button">
                    Select
                  </button>
                  <div className="membership-box__main-block_pin">v</div>
                </div>
                <div className="membership-box__benefit-block">
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                  <span className="membership-box__benefit-block_content">
                    I’m a benefit
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
