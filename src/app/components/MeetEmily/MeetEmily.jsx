import React, { Component } from "react";
import "./MeetEmily.scss";

export class MeetEmily extends Component {
  render() {
    return (
      <div className="meet-emily">
        <section className="meet-emily__header">
          <h1 className="meet-emily__header_text">Meet Emily</h1>
        </section>
        <div className="meet-emily__mobile-emily-image"></div>
        <section className="meet-emily__content">
          <div className="meet-emily__content_wrapper">
            <div className="meet-emily__blue-box">
              <div className="meet-emily__blue-box_wrapper">
                <div className="meet-emily__blue-box_description">
                  <span className="meet-emily__blue-box_description_block">
                    Certified Fitness Trainer
                  </span>
                  <span className="meet-emily__blue-box_description_block">
                    and Personal Coach
                  </span>
                </div>

                <div className="meet-emily__blue-box_text">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </div>
                <button className="meet-emily__blue-box_button">
                  Book a Class
                </button>
              </div>
            </div>
            <div className="meet-emily__emily-sitting"></div>
            <div className="meet-emily__my-vision">
              <div className="meet-emily__my-vision_wrapper">
                <div className="meet-emily__my-vision_header">My Vision</div>
                <div className="meet-emily__my-vision_text">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="meet-emily__jumping-image"></div>
        </section>
      </div>
    );
  }
}
