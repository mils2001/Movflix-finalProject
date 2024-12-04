import React, { Component,} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"



export class Navbar extends Component {


 
  render() {
  
    return (
      <div>
        <nav className='navbar'>
        
          <div className='container-logo'>
            <img src='https://i.imgur.com/lncSbip.jpeg' alt='logo 'className='logo' />
            <span>Movflix</span>
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
          <div className='container'>
          <button className='btn'>Sign Up</button>
          <button className='btn'>Sign In</button>
          </div>
          

        </nav>
      

      </div>
    )
  }
}

export default Navbar