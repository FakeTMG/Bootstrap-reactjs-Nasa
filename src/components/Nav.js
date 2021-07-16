import React from 'react'
import { Link } from "react-router-dom";
function NasaNav({isHomePage,creator,home,filterText}) {
  return (
    <div style={{position: 'fixed',top:'0',width:'100%',zIndex:'100'}}>
      <nav className="navbar navbar-inverse" >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              MohamedFM
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className={home}>
              <Link to="/">Home</Link>
            </li>
            <li className={creator}>
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
            {isHomePage ? 
              <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={filterText}
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>: null }
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default NasaNav



// about, creator, News

