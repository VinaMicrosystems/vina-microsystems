import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
const Footer = () => (

    <footer>
        <div className="footer" >
            <div className="col-12">
                <div className="footer-links" >
                    <ul>
                        <li>

                            <a href="https://github.com/orgs/vinaMictrosystems" target="_blank" rel="noopener noreferrer"><Icon name="fa fa-github" /></a>

                        </li>
                        <li><a href="mailto:vinacomke@gmail.com"><Icon name="fa fa-envelope" /></a></li>
                        <li><a href="tel:+254791294251"><Icon name="fa fa-phone" /></a></li>

                    </ul>
                </div>

            </div>

        </div>
    </footer >

)
export default Footer