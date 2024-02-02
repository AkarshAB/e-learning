import React from 'react'
import {awrapper} from '../../dummydata.js'

function AWrapper() {
  return (
    <>
    <section className="awrapper">
      <div className="container grid">
        {
          awrapper.map((val) => (
            <div className="box d-flex">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h3>{val.data}</h3>
                <h5>{val.title}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default AWrapper