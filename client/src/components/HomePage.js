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
import NasaNav from "./Nav";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
      searchTerm: "",
      loading:false,
      isHomePage:true
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
    const { posts, errorMsg, searchTerm,loading,isHomePage } = this.state;
    return (
      <div>
         <NasaNav isHomePage={isHomePage} filterText={(event) => {
                    this.setState({ searchTerm: event.target.value });
                  }} />
        <div>

        
          {loading ? <SingleHomePage posts={posts} searchTerm={searchTerm} first={first} second={second} third={third} fourth={fourth} />
          
          : <div className="loader"></div>}
          
          
        </div>
      </div>
    );
  }
}

export default HomePage;
