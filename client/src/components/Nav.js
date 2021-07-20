import React from 'react'
import './Nav.css'

import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    useHistory,
    Link
  } from "react-router-dom";

function NasaNav({isHomePage,filterText,creator,islogged}) {
  const logout=()=>{
    localStorage.clear()
  }
  
  

  
  
  return (
    <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark" style={{backgroundColor:"#333"}}>
                    
                    <Link to='/' className="home">
                      <ReactBootStrap.Navbar.Brand ><h2>Home</h2></ReactBootStrap.Navbar.Brand>
                    </Link>  
                      
                
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav right" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav right">
                    <ReactBootStrap.Nav className="mr-auto right"> 
                      <Link to="/creatorinfo" className="text">
                          <ReactBootStrap.Nav.Link href="/creatorinfo" className={creator}>Creator Info</ReactBootStrap.Nav.Link>

                      </Link>
                      
                      {
                        localStorage.getItem('status')==='logged' ? <div>
                          <Link to="/signup"  className="text" onClick={logout}>
                              <ReactBootStrap.Nav.Link href="/signup">Logout</ReactBootStrap.Nav.Link>

                          </Link>
                        </div> : 
                        <div style={{display: 'flex'}}>
                          <Link to="/login"  className="text" >
                              <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>

                          </Link>
                          <Link to="/signup"  className="text">
                              <ReactBootStrap.Nav.Link href="/signup">Sign Up</ReactBootStrap.Nav.Link>

                          </Link>

                        </div>
                      }
                      {isHomePage ? 
                        <form className="search" >
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            onChange={filterText}
                          />
                          
                        </div>
                      </form>: null }
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
  )
}

export default NasaNav



// about, creator, News

