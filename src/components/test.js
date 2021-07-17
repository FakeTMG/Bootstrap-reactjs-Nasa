import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    useHistory,
    Link
  } from "react-router-dom";
import {IconButton,Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
const NavBar = ({}) => {
    let history =useHistory()
    const classes = useStyles()
    return(
        <div className="App" style={{position: 'fixed',top:'0',width:'100%',zIndex:'100'}}>
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
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
                <Link to='/' className={home}>
                  <ReactBootStrap.Navbar.Brand > Home</ReactBootStrap.Navbar.Brand>
                </Link>  
                  
            
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 
                <Link to="/creatorinfo" className={creator}>
                    <ReactBootStrap.Nav.Link href="/creatorinfo">Creator info</ReactBootStrap.Nav.Link>

                </Link>
                <Link to="/login">
                    <ReactBootStrap.Nav.Link href="/login">Sign Up</ReactBootStrap.Nav.Link>

                </Link>
                <Link to="/login">
                    <ReactBootStrap.Nav.Link href="/login">login</ReactBootStrap.Nav.Link>

                </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;