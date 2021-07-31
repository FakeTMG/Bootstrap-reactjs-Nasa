import React from 'react'
import './Nav.css'

import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    useHistory,
    Link
  } from "react-router-dom";

function NasaNav({home,filterText,creator,register,login,isHomePage}) {
  const logout=()=>{
    localStorage.clear()
  }
  
  

  
  
  return (
    <div
        
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`${home} nav-link`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${creator} nav-link`} to="fav">
                    fav posts
                  </Link>
                </li>
               
              </ul>
              {isHomePage ? (
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    onChange={filterText}
                  />
                  
                </form>
              ) : null}
              <ul className="navbar-nav mb-2 mb-lg-0">
                {localStorage.getItem("status") === "logged" ? (
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {localStorage.getItem("user_email")}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/" onClick={logout}>Logout</a>
                    <a class="dropdown-item" href="/change_pass">change password</a>
                    
                  </div>
                </li>
                ) : (
                  <div style={{display:"flex"}}>
                    <li className="nav-item">
                      <Link
                        className={`${register} nav-link`}
                        to="signup"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`${login} nav-link`}
                        to="login"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Login
                      </Link>
                    </li>
                    </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default NasaNav



// about, creator, News

