import React, { useState } from 'react'
import './editprofile.style.scss'
import CheckBox from '../../../components/checkbox/CheckBox'
import CaretIcon from '../../../icons/Caret.icon'

const JOBS = [
  'Painter',
  'Plumber',
  'Electrician',
  'Cleaner',
  'General handy person'
]

const EXPERIENCES = ['0-2 years', '2-5 years', '5+ years']

function EditProfile () {
  const [job, setJob] = useState(JOBS[0])
  const [experience, setExperience] = useState(EXPERIENCES[0])
  return (
    <div id='edit-profile'>
      <div className='job-type-section'>
        <span>I am a:</span>
        <div className='job-types'>
          {JOBS.map((x, i) => (
            <div
              onClick={() => setJob(x)}
              className={x === job ? 'bubble active' : 'bubble'}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className='experience-section'>
        <span>Experience:</span>
        <div className='job-types'>
          {EXPERIENCES.map((x, i) => (
            <div
              onClick={() => setExperience(x)}
              className={x === experience ? 'bubble active' : 'bubble'}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className='booking-section'>
        <span>Booking</span>
        <div className='d-flex flex-column'>
          <div className='line'>
            <CheckBox />
            <span>Instant booking</span>
          </div>
          <div className='line'>
            <CheckBox />
            <span>All clients must send a reservation request</span>
          </div>
        </div>
      </div>

      <div className='hourly-section'>
        <span>Set per hour rate</span>
        <form action=''>
          <div className='currency-tip'>CAD</div>
          <input type='text' value={'$70'} />
        </form>
      </div>

      <div className='setup-payouts'>
        <span>Setup payouts</span>
        <div className='payout'>
          <div className='d-flex'>
            <img src='/images/paypal.png' alt='' />
            <div className='d-flex flex-column'>
              <h6>Paypal in CAD</h6>
              <ul>
                <li>One business day</li>
                <li>Paypal fees may apply</li>
              </ul>
            </div>
          </div>
          <a>
            <CaretIcon />
          </a>
        </div>
        <div className='payout'>
          <div className='d-flex'>
            <img src='' alt='' />
            <div className='d-flex flex-column'>
              <h6>Interac</h6>
              <ul>
                <li>One business day</li>
                <li>No fees</li>
              </ul>
            </div>
          </div>
          <a>Verified</a>
        </div>
      </div>

      <div className='bio-section'>
        <span>Bio</span>
        <div className='bio'>
          <h6>
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </h6>
        </div>
      </div>

      <div className='button'>
        <div className='red-btn'>Save changes</div>
      </div>
    </div>
  )
}

export default EditProfile
