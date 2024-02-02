import React from 'react'

function Title({subtitle, title}) {
  return (
    <>
    <div id="heading" className='ms-2'>
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
    </div>
    </>
  )
}

export default Title