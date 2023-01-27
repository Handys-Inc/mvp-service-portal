import React from 'react'
import './jobprofile.style.scss'
import { useHomeContext } from '../../../pages/home/home.context'
import TickIcon from './../../../icons/jobprofile/Tick.icon'

function JobProfile () {
  const { editProfileModalShow, setEditProfileModalShow } = useHomeContext()
  return (
    <div id='h-job-profile'>
      <div className='left-section'>
        <img src='/images/profile-starter.png' alt='' />

        <div className='left-body'>
          <div className='d-flex flex-column'>
            <h4>Username confirmed</h4>
            <div className='line'>
              <TickIcon />
              <span>Phone number</span>
            </div>
            <div className='line'>
              <TickIcon />
              <span>Email address</span>
            </div>
            <div className='line'>
              <TickIcon />
              <span>ID verified</span>
            </div>
            <div className='line'>
              <TickIcon />
              <span>Paypal verified</span>
            </div>
            <div className='line'>
              <TickIcon />
              <span>Interac verified</span>
            </div>
          </div>
          <small>
            Learn more about how confirming account info helps keep the Handys
            community safe
          </small>
        </div>
      </div>

      <div className='right-section'>
        <div className='right-header'>
          <div className='d-flex flex-column'>
            <h2>Username, Painter</h2>
            <h5>2 - 5 years experience</h5>
            <h6>Joined in 2019</h6>
          </div>

          <a href onClick={() => setEditProfileModalShow(true)}>
            Edit profile
          </a>
        </div>

        <div className='about-section'>
          <h4>About</h4>
          <p>
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </p>
        </div>

        <div className='per-hour-section'>
          <h4>Per hour rate</h4>
          <p>$65</p>
        </div>
        <div className='booking-section'>
          <h4>Booking</h4>
          <p>Instant booking</p>
        </div>

        <div className='availablity-section'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex flex-column'>
              <h4>Set availablity</h4>
              <div className='bubble'>
                <span>Jan 6, 2023 - March 6, 2023</span>
              </div>
            </div>
            <a>Edit</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobProfile
