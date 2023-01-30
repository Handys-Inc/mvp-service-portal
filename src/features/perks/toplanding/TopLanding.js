import React from 'react'
import './toplanding.style.scss'
import RightGraphic from './../../../graphics/toplanding/Right.graphic'

function TopLanding () {
  return (
    <div id='top-landing'>
      <div className='d-flex flex-column'>
        <h1>Signing up with Handys has its benefits</h1>
        <h4>
          Unlock valuable exclusive offers for your business with a significant
          potential benefit
        </h4>
      </div>

      <div className='d-flex'>
        <RightGraphic />
      </div>
    </div>
  )
}

export default TopLanding
