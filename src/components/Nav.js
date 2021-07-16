import React, { Component } from "react";
import { Link } from "react-router-dom";

// about, creator, News

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              MohamedFM
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className={this.props.home}>
              <Link to="/">Home</Link>
            </li>
            <li className={this.props.creator}>
              <Link to="/creatorinfo">Creator info</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="glyphicon glyphicon-log-in"></span> login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
