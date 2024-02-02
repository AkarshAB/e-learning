import React from 'react'
import {coursesCard} from '../../dummydata.js' 
import './Courses.css'

function CoursesCard() {
  return (
    <>
      <section className="coursesCard">
<div className="container grid2">
  {
    coursesCard.map((val) => (
      <div className="items d-flex ">
        <div className="left">
          <div className="img">
            <img src={val.cover} alt="" />
          </div>
        </div>
        <div className="text">
          <h3>{val.coursesName}</h3>
          <div className="rate">
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <label htmlFor="">(5.0)</label>
          </div>
          <div className="details">
            {
              val.courTeacher.map((details) => (
                <>
                <div className="box">
                  <div className="dimg">
                    <img src={details.dcover} alt="" />
                  </div>
                  <div className="para">
                    <h5>{details.name}</h5>
                  </div>
                </div>
                <span>{details.totalTime}</span>
                </>
              ))
            }
          </div>
        </div>
      </div>
    ))
  }
</div>
      </section>
    </>
  )
}

export default CoursesCard