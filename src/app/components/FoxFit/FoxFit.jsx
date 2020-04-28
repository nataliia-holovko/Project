import React, { Component } from "react";
import "./FoxFit.scss";

export class FoxFit extends Component {
  render() {
    return (
      <div className="fox-fit">
        <section className="fox-fit__header">
          <h1 className="fox-fit__header_text">About FoxFit</h1>
        </section>
        <section className="fox-fit__content">
          <div className="fox-fit__content_wrapper">
            <div className="fox-fit__blue-box">
              <div className="fox-fit__blue-box_wrapper">
                <div className="fox-fit__blue-box_description">
                  The Ultimate Method to Change Your Life
                </div>
                <div className="fox-fit__blue-box_text">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </div>
                <div className="fox-fit__blue-box_conclusion">
                  This is a great space to write a long text about your company
                  and your services. You can use this space to go into a little
                  more detail about your company.
                </div>
              </div>
            </div>
            <div className="fox-fit__why-box">
              <div className="fox-fit__why-box_wrapper">
                <div className="fox-fit__why-box_header">Why FoxFit</div>
                <div className="fox-fit__why-box_content">
                  <div className="fox-fit__why-box_content-blocks">
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Suitable for Beginners
                      </div>
                    </div>
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Flexible Schedule
                      </div>
                    </div>
                  </div>
                  <div className="fox-fit__why-box_content-blocks">
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Personal Guidance
                      </div>
                    </div>
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Advanced Techniques
                      </div>
                    </div>
                  </div>
                  <div className="fox-fit__why-box_content-blocks">
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Proven Results
                      </div>
                    </div>
                    <div className="fox-fit__why-box_content-blocks_block">
                      <div className="fox-fit__why-box_item">
                        <img
                          src=""
                          alt=""
                          className="fox-fit__why-box_item-img"
                        />
                      </div>
                      <div className="fox-fit__why-box_item-text">
                        Professional Trainers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="fox-fit__workout-image"></div>
        </section>
      </div>
    );
  }
}
