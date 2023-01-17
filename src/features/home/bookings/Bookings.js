import _ from 'lodash'
import React, { useState } from 'react'
import SearchPaperIcon from '../../../graphics/bookings/SearchPaper.icon'
import './bookings.style.scss'

function Bookings () {
  const [data, setData] = useState({})
  return (
    <div id='bookings'>
      <h4>Your bookings</h4>

      <div className='bubbles'>
        <div className='bubble'>Upcoming (0)</div>
        <div className='bubble'>Completed (0)</div>
        <div className='bubble'>Pending offers (0)</div>
      </div>

      <div className='data-section'>
        {_.isEmpty(data) && (
          <div className='no-data'>
            <SearchPaperIcon />
            <p>No available data to show</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bookings
