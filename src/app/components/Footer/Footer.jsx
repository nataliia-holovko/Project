import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="get-in-touch">
          <div className="get-in-touch__contact">
            <div className="get-in-touch__contact_content">
              <h2 className="get-in-touch__contact_header">Get in Touch</h2>
              <div className="get-in-touch__contact_text">
                <p>I'm a paragraph. Click here to add</p>
                <p>your own text and edit me.</p>
              </div>
              <div className="get-in-touch__contact_text">
                <p>Address. 500 Terry Francois Street</p>
                <p>San Francisco, CA 94158</p>
              </div>
              <div className="get-in-touch__contact_text">
                <p>Email. info@mysite.com</p>
                <p>Phone. 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="get-in-touch__submit-form">
            <form
              action=""
              className="get-in-touch__submit-form__wrapper submit-form"
            >
              <div className="submit-form__data-inputs">
                <input
                  type="text"
                  placeholder="First Name"
                  className="submit-form__data-inputs_input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="submit-form__data-inputs_input"
                />
              </div>
              <div className="submit-form__data-inputs">
                <input
                  type="text"
                  placeholder="Email"
                  className="submit-form__data-inputs_input"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="submit-form__data-inputs_input"
                />
              </div>
              <div className="submit-form__message-input">
                <input
                  type="textarea"
                  placeholder="Type your message here..."
                  className="submit-form__message-input_add-message"
                />
              </div>
              <div className="submit-form__button">Submit</div>
            </form>
          </div>
        </div>
        <div className="footer__yellow-block">
          © 2023 by Emily Fox Fitness. Proudly created with Wix.com
        </div>
      </footer>
    );
  }
}
