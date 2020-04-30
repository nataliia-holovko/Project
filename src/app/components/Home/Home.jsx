import React, { Component } from "react";
import "./Home.scss";
import { ShopsLogo } from "../ShopsLogo/ShopsLogo.jsx";

export class Home extends Component {
  render() {
    return (
      <div className="main-section">
        <section className="main-section__discover-content discover-content">
          <div className="discover-content__wrapper">
            <div className="discover-content__wrapper__description-content description-content">
              <div className="description-content__description-header">
                Emily Fox
              </div>
              <div className="description-content__description-text">
                <div className="description-content__description-text_item">
                  Discover Your Power
                </div>
                <div className="description-content__description-text_item">
                  Through Online Coaching
                </div>
              </div>
              <div className="description-content__description-logos">
                <img
                  className="description-content__logo"
                  src="./src/images/logo1.webp"
                  alt=""
                />
                <img
                  className="description-content__logo"
                  src="./src/images/logo2.webp"
                  alt=""
                />
                <img
                  className="description-content__logo"
                  src="./src/images/logo3.webp"
                  alt=""
                />
                <img
                  className="description-content__logo"
                  src="./src/images/logo4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="description-content__mobile"></div>
          <div className="description-content__final-blocks final-blocks">
            <div className="final-blocks__block final-blocks__discover-foxfit">
              <span>Discover FoxFit</span>
            </div>
            <div className="final-blocks__block final-blocks__book-a-class">
              <span>Book a Class</span>
            </div>
          </div>
        </section>

        <section className="main-section__trainer-content trainer-content">
          <div className="trainer-content__image-box">
            <div className="trainer-content__yellow-box yellow-box">
              <div className="yellow-box__content">
                <div className="yellow-box__header">Hi, I’m Emily</div>

                <div className="yellow-box__description">
                  Certified Fitness Trainer and Personal Coach
                </div>

                <div className="yellow-box__text">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </div>
                <div className="yellow-box__button final-blocks__block final-blocks__book-a-class">
                  Read more
                </div>
              </div>
            </div>
            <div className="trainer-content__image-box_mobile"></div>
          </div>
        </section>
        <section className="introducing">
          <div className="introducing__block"></div>
          <div className="introducing__image"></div>
          <div className="introducing__content">
            <div className="introducing__content_wrapper">
              <div className="introducing__content_box blue-box">
                <div className="blue-box__content">
                  <div className="blue-box__header">Introducing FoxFit</div>

                  <div className="blue-box__description">
                    The Ultimate Method
                  </div>
                  <div className="blue-box__description">
                    to Change Your Life
                  </div>

                  <div className="blue-box__text">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                  </div>
                  <div className="blue-box__button final-blocks__block final-blocks__book-a-class">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="introducing__image_mobile"></div>
        </section>
        <section className="book-online">
          <div className="book-online__wrapper">
            <h2 className="book-online__header">Book an Online Class</h2>
          </div>
          <div className="book-online__featured">As Featured On</div>
          <ShopsLogo />
          <div className="book-online__app-service">
            <h2 className="book-online__app-service_header">
              FoxFit on the Go
            </h2>
            <div className="book-online__app-service_content app-service_content">
              <div className="app-service__text">
                The app lets your clients book services, get notifications &
                stay engaged with your business
              </div>
              <form action="" className="app-service__form">
                <div className="app-service__form_phone-code">
                  <input
                    type="text"
                    placeholder="+380"
                    className="app-service__form_phone-code_input"
                  />
                </div>
                <div className="app-service__form_phone-number">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="app-service__form_phone-number_input"
                  />
                </div>
                <div>
                  <button className="app-service__form_button">Send</button>
                </div>
              </form>

              <div className="app-service__store-buttons">
                <div className="app-service__store-buttons_google"></div>
                <div className="app-service__store-buttons_app"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
