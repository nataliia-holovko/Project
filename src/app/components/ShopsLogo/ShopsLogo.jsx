import React, { Component } from "react";
import "./ShopsLogo.scss";

export class ShopsLogo extends Component {
  render() {
    return (
      <div className="book-online__shops-block">
        <div className="book-online__shops-block_logo">
          <img
            className="shop-logo_six"
            src="./src/images/logos_fitness_trainer-06.webp"
            alt=""
          />
        </div>
        <div className="book-online__shops-block_logo">
          <img
            className="shop-logo_seven"
            src="./src/images/logos_fitness_trainer-07.webp"
            alt=""
          />
        </div>
        <div className="book-online__shops-block_logo">
          <img
            className="shop-logo_eight"
            src="./src/images/logos_fitness_trainer-08.webp"
            alt=""
          />
        </div>
        <div className="book-online__shops-block_logo">
          <img
            className="shop-logo_nine"
            src="./src/images/logos_fitness_trainer-09.webp"
            alt=""
          />{" "}
        </div>
        <div className="book-online__shops-block_logo">
          <img
            className="shop-logo_ten"
            src="./src/images/logos_fitness_trainer-10.webp"
            alt=""
          />
        </div>
      </div>
    );
  }
}
