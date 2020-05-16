import React,
    {
    Component
}

from "react";

import "./LogIn.scss";

export class LogIn extends Component {
    render() {
        return (<section className="login-menu"> <div className="login-menu__close-btn"> <a href="/project.html"> <span>x</span> </a> </div> <div className="login-menu__wrapper"> <h1 className="login-menu__header">Sign Up</h1> <p className="login-menu__text">Already a member? </p> <a className="login-menu__link"href=""> Log in </a> <div className="login-menu__web-box"> <button className="login-menu__web-box_item"></button> <button className="login-menu__web-box_item"></button> </div> <div className="login-menu__line"> <span className="login-menu__line_text">or</span> </div> <input className="login-menu__sign-up"
            type="text"
            placeholder="Sign up with email"
            /> </div> </section>);
    }
}