import React, { useState } from 'react'
import Head from './Head.jsx'
import './Header.css'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';



function Header() {
  const location = useLocation();
  const isLogin = location.pathname === '/login'
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      {/* <BrowserRouter> */}
      
      <header>
        <nav className='flexSB' style={{display: isLogin ? 'none' : ''}}>
          <ul className={click ? "mobile-nav" : "flexSB"}  onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
          <div className="start">
            <div className="button">Join us Today</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      
      {/* </BrowserRouter> */}
    </>
  )
}

export default Header