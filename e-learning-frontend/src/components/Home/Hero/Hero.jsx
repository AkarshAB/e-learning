import React from 'react'
import './Hero.css'
import Title from '../../common/title/Title.jsx'

function Hero() {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          <Title subtitle={'WELCOME TO EDUGROWTH'} title={'Best Online Education'}/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, magni incidunt! Rem iusto assumenda error fuga culpa, at sapiente accusamus, ab nulla ex in id corporis qui quam impedit consectetur!</p>
          <div className="button">
            <button className="primary-btn">
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button className="secondary-btn">
              VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div className="margin"></div>
    </>
  )
}

export default Hero