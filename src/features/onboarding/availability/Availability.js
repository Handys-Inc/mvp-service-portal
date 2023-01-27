import React from 'react'
import './availability.style.scss'

function Availability () {
  return (
    <div id='availibity'>
      <div className='a-header'>
        <h5>Pick a date or a date range</h5>
        <small>Availability can always be changed later</small>
      </div>

      <div className='date-selections'></div>
    </div>
  )
}

export default Availability
