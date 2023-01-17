import React from 'react'

function JobDetails () {
  return (
    <div id='job-details'>
      <h2>Job details</h2>

      <div className='d-flex customer-info align-items-center justify-content-between'>
        <div className='d-flex flex-column'>
          <h3>Customer info</h3>
          <h5>Jane Parker</h5>
        </div>
        <img src='/images/profile-emojis/1.png' alt='' />
      </div>

      <div className='breakdown'>
        <h3>Pricing break down</h3>
        <div className='d-flex price align-items-center justify-content-between'>
          <h4>1st hour</h4>
          <h4>$65 CAD</h4>
        </div>
        <div className='d-flex price align-items-center justify-content-between'>
          <h4>2nd hour</h4>
          <h4>$65 CAD</h4>
        </div>
        <div className='total d-flex price align-items-center justify-content-between'>
          <h3>Total price</h3>
          <h3>$195 CAD</h3>
        </div>
      </div>
      <div className='booking-date'>
        <h3>Booking date</h3>
        <h6>January 14, 2023</h6>
      </div>
      <div className='customer-address'>
        <h3>Customer address</h3>
        <h6>Chemin De L' Albatros,Kamloops, qc, Canada</h6>
      </div>
    </div>
  )
}

export default JobDetails
