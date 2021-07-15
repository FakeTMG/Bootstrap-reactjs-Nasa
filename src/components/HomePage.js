import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import first from "./25640_PIA24264-Perseverance_Sol3_Mastcam-Z_panorama-web6.jpg";
import second from "./25689_PIA24487-web.jpg";
import third from "./25699_PIA24482-800.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
      searchTerm: "",
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
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  render() {
    const { posts, errorMsg, searchTerm } = this.state;
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
          <h1 className="test">Nasa News</h1>
          {posts.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="container containero col-xs-3" key={val.date}>
                  <img alt="" className="img-rounded" src={val.url} />
                  <h3 className="">{val.title}</h3>
                  <h5 className="">{val.explanation}</h5>
                  <footer className="date">
                    {val.date} {val.copyright}
                  </footer>
                </div>
              );
            })}
        </div>
        <h3 className="test">
          See Some Nasa's Pictures From Mars taken by 'perseverance' !
        </h3>
        <div class="container">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="item active">
                <img src={first} alt="Los Angeles" />
              </div>

              <div class="item">
                <img src={second} alt="Chicago" />
              </div>

              <div class="item">
                <img src={third} alt="New york" />
              </div>
            </div>
            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
