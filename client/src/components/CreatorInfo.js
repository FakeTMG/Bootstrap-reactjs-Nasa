import React, { Component } from "react";
import img from "./img_avatar1.png";
import Nav from "./Nav";

class CreatorInfo extends Component {
  componentDidMount() {
    document.title = "MohamedFm | Creator Info";
  }
  render() {
    return (
      <div>
        <Nav creator="active" />
        <div className="container">
          <br />
          <br />
          <br />
          <h2>Info on the Creator</h2>
          <p>
            This website is created by Mohamed saidana as a project after
            learning Reactjs and Bootstrap so he(i) wanted to test his
            knowledge.
          </p>
          <h5>Who is Mohamed Saidana</h5>
          <br />
          <div className="media">
            <div className="media-left">
              <img
                alt=""
                src={img}
                className="media-object"
                style={{ width: "60px" }}
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">Mohamed Saidana</h4>
              <p>
                Mohamed Saidana is an a random guy in the internet that is
                trying to learn programming after becoming a boomer.
                <br />
                He is now 16 and is wasting his time on useless stuff so don't
                be like ex Mohamed :p.
              </p>
            </div>
          </div>
          <hr />
          <div className="media">
            <div className="media-body">
              <h4 className="media-heading">Useless information</h4>
              <p>
                Now that you know who i'am go check the website and see if you
                like it !
              </p>
            </div>
            <div className="media-right">
              <img
                alt=""
                src={img}
                className="media-object"
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorInfo;
