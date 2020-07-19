import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './Icon'

const NavItem = ({ children }) => (
    <li className="nav-item" role="menuitem">
        {children}
    </li>
)
const Nav = ({ url, details, name }) => {

    const [ isToggled, setisToggled ] = useState(false)

    return (
        <header>
            <div className="col-12 lg-bar">

                <nav>
                    <div className="nav-bar">
                        <ul className="brand">
                            <NavItem><NavLink to="/" activeClassName="active-link">Home</NavLink></NavItem>
                        </ul>
                        <ul>
                            <li className="github">
                                <a href="https://github.com/vinaMicrosystems" target="_blank" rel="noopener noreferrer"><Icon name="fa fa-github fa-1.5x" /></a>

                            </li>
                            <NavItem><NavLink to="/news" activeClassName="active-link">News</NavLink></NavItem>
                            <NavItem><NavLink to="/computers" activeClassName="active-link">Computers</NavLink></NavItem>
                            <NavItem><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></NavItem>
                            <NavItem><button className="contact-btn">Contact</button></NavItem>

                        </ul>
                    </div>
                </nav>

            </div>
            <div className="col-12 sm-menu">
                <div className="mobile-menu">

                    <div className="nav-menu">
                        <button
                            onClick={() => setisToggled(isToggled => !isToggled)}
                            style={{ backgroundColor: "transparent", borderStyle: "none" }}
                            className="menu-btn"><Icon name="fa fa-bars fa-2x" />
                        </button>
                        <ul className={isToggled ? "nav nav-toggled" : "nav"}
                            role="menu"
                            aria-hidden={isToggled ? false : true}
                            style={{ display: isToggled ? "block" : "none" }}
                        >
                            <NavItem><Link to="/">Home</Link></NavItem>
                            <NavItem><Link to="/computers">Computers</Link></NavItem>
                            <NavItem><Link to="/news">News</Link></NavItem>
                            <NavItem><Link to="/blog">Blog</Link></NavItem>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav