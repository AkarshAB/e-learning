import React from 'react'
import { useLocation } from 'react-router-dom'

function Back({title}) {
  const location = useLocation();
  return (
    <>
      <section className="back">
        <h4>Home / {location.pathname.split("/")[1]}</h4>
        <h3>{title}</h3>
      </section>

      <div className="margin">
        
      </div>
    </>
  )
}

export default Back