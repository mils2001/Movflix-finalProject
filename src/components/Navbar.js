import React, { Component } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

export class Navbar extends Component {
 
  render() {
  
    return (
      <div>
        <nav className='navbar'>
          <div className='logo'>
            Movflix.
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='Home'>Home</Link>
            </li>
            <li>
              <Link to='About'>About</Link>
            </li>
            <li>
              <Link to='Contact'>Contact</Link>
            </li>
        
          </ul>
          

        </nav>
      

      </div>
    )
  }
}

export default Navbar