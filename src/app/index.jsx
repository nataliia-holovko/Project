import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import { Header } from "./components/Header/Header.jsx";

import { Footer } from "./components/Footer/Footer.jsx";

import { Home } from "./components/Home/Home.jsx";

import { MeetEmily } from "./components/MeetEmily/MeetEmily.jsx";
import { FoxFit } from "./components/FoxFit/FoxFit.jsx";
import { Pricing } from "./components/Pricing/Pricing.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";

class App extends React.Component {
  render() {
    return [
      <Router>
        <div className="page">
          <Header />
          <main>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/meet">
              <MeetEmily />
            </Route>
            <Route path="/foxfit">
              <FoxFit />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
          </main>
          <Footer />
        </div>
      </Router>,
    ];
  }
}

ReactDOM.render(<App />, document.querySelector(".react-root"));
