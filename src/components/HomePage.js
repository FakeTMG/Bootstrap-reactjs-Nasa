import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import first from "./first_image.jpg";
import second from "./25689_PIA24487-web.jpg";
import third from "./25699_PIA24482-800.jpg";
import fourth from './nasa-mars-940x550.jpg'
import './loader.css'
import SingleHomePage from "./SingleHomePage/singleHomePage";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
      searchTerm: "",
      loading:false,
    };
  }

  componentDidMount() {
    document.title = "MohamedFm | Home";
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=RDjAmaAvEeRa5ibvhXKqhcqoUJQjishbP2shAuzF&count=12"
      )
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data,loading:true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  render() {
    const { posts, errorMsg, searchTerm,loading } = this.state;
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                MohamedFM
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className={"active"}>
                <Link to="/">Home</Link>
              </li>
              <li className="">
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
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={(event) => {
                    this.setState({ searchTerm: event.target.value });
                  }}
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div>

        
          {loading ? <SingleHomePage posts={posts} searchTerm={searchTerm} first={first} second={second} third={third} fourth={fourth} />
          
          
          
          : <div className="loader"></div>}
          
          
        </div>
      </div>
    );
  }
}

export default HomePage;
