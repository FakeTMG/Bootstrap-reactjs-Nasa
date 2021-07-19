import React, { Component } from "react";
import Nav from "./Nav";

class login extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div class="container" >
          <h3>Login / register Examples</h3>
          <p>Please enter your email / password as explained.</p>
          <p>Register</p>

          <form>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                id="email"
                type="text"
                class="form-control"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-lock"></i>
              </span>
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
            <br />
            <div class="input-group">
              <span class="input-group-addon">Text</span>
              <input
                id="msg"
                type="text"
                class="form-control"
                name="msg"
                placeholder="Additional Info"
              />
            </div>
          </form>
          <br />

          <p>Login</p>
          <form>
            <div class="input-group">
              <input
                id="email"
                type="text"
                class="form-control"
                name="email"
                placeholder="Email"
              />
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
            </div>
            <div class="input-group">
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
              />
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-lock"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
