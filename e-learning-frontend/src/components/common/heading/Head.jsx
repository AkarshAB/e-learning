import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'


function Head() {

  const location = useLocation();
  const isLogin = location.pathname === '/login'
  const linearGradientStyle = {
    backgroundImage: 'linear-gradient(to right, #a9ccd3, #c0dde5)'
  }

  return (
    <>
      <section className='head'  style={isLogin? linearGradientStyle : {}}>
        <div className="container flexSB">
          <div className="logo">
            <h1>EDUGROWTH</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head