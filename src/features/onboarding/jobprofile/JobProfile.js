import React, { useState } from 'react'
import './jobprofile.style.scss'
import $ from 'jquery'
import CheckBox from '../../../components/checkbox/CheckBox'
import CaretIcon from '../../../icons/Caret.icon'

import {
  PROFILE_VERSIONS,
  useOnboardingContext
} from '../../../pages/onboarding/onboarding.context'
import ErrorIcon from '../../../icons/jobprofile/Error.icon'
import EditIcon from '../../../icons/jobprofile/Edit.icon'
import _ from 'lodash'

const JOBS = [
  'Painter',
  'Plumber',
  'Electrician',
  'Cleaner',
  'General handy person'
]
const BOOKING_OPTIONS = [
  'Instant booking',
  'All clients must send a reservation request'
]

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const EXPERIENCES = ['0-2 years', '2-5 years', '5+ years']

function JobProfile ({ onClose }) {
  const [job, setJob] = useState(JOBS[0])
  const [rate, setRate] = useState('')
  const standard = 100
  const [showError, setShowError] = useState(false)
  const [booking, setBooking] = useState('')
  const {
    setSetupPaypalShow,
    setProfileVersion,
    setProfileObj,
    profileObj,
    availabilityObj,
    paypalObj,
    interacObj,
    setSection
  } = useOnboardingContext()
  const [experience, setExperience] = useState(EXPERIENCES[0])

  const validate = () => {
    return parseFloat(rate) < standard
  }

  const formDate = date => {
    var formatted =
      MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
    return formatted
  }
  return (
    <div id='job-profile'>
      <h4 className='h4'>Job profile</h4>
      <div className='job-type-section'>
        <span>
          I am a:<sup>*</sup>
        </span>
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
        <span>
          Experience:<sup>*</sup>
        </span>
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
          {BOOKING_OPTIONS.map((x, i) => (
            <div className='line'>
              <CheckBox
                onChange={() => {
                  setBooking(x)
                }}
                value={booking === x}
              />
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>

      <div id='hourly' className='hourly-section'>
        <span>Set per hour rate</span>
        <form action=''>
          <div className='currency-tip'>CAD</div>
          <input
            onChange={e => {
              setRate(e.target.value.replace('$', ''))
            }}
            type='text'
            value={!!rate.length ? '$' + rate : ''}
          />
        </form>
        {showError && (
          <div className='error-line'>
            <ErrorIcon />
            <small>Error: Per hour charge is below industry standard</small>
          </div>
        )}
      </div>

      <div className='setup-payouts'>
        <span>Setup payouts</span>
        <div
          className='payout mt-2'
          onClick={() => {
            onClose()
            setSetupPaypalShow(true)
          }}
        >
          <div className='d-flex'>
            <img src='/images/paypal.png' alt='' />
            <div className='d-flex ms-1 flex-column'>
              <h6>Paypal in CAD</h6>
              <ul>
                <li>One business day</li>
                <li>Paypal fees may apply</li>
              </ul>
            </div>
          </div>
          {!_.isEmpty(paypalObj) && <div className='verified'>Verified</div>}

          {_.isEmpty(paypalObj) && (
            <div
              className='caret'
              onClick={() => {
                setProfileVersion(PROFILE_VERSIONS[1])
              }}
            >
              <CaretIcon />
            </div>
          )}
        </div>
        <div className='payout'>
          <div className='d-flex'>
            <img src='/images/interac.png' alt='' />
            <div className='d-flex ms-1 flex-column'>
              <h6>Interac</h6>
              <ul>
                <li>One business day</li>
                <li>No fees</li>
              </ul>
            </div>
          </div>
          {!_.isEmpty(interacObj) && <div className='verified'>Verified</div>}

          {_.isEmpty(interacObj) && (
            <div
              className='caret'
              onClick={() => {
                setProfileVersion(PROFILE_VERSIONS[2])
              }}
            >
              <CaretIcon />
            </div>
          )}
          {/* <div className='verified'>Verified</div> */}
        </div>
      </div>

      <div className='bio-section'>
        <span>Bio</span>
        <div className='bio'>
          <textarea name='bio' id='bio' cols='30' rows='5'></textarea>
          {/* <h6>
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </h6> */}
        </div>
      </div>
      <div className='availability-section'>
        <span>
          Set availability<sup>*</sup>
        </span>
        <div className='avail-line d-flex align-items-center'>
          <div className='grey-btn'>
            {!!availabilityObj.startDate && !!availabilityObj.endDate && (
              <span>
                {formDate(availabilityObj.startDate)} -{' '}
                {formDate(availabilityObj.endDate)}
              </span>
            )}
          </div>
          <a
            href
            className='ms-2 pointer'
            onClick={() => {
              setProfileVersion(PROFILE_VERSIONS[3])
            }}
          >
            <EditIcon />
          </a>
        </div>
      </div>
      <div
        className='button'
        onClick={() => {
          if (validate()) {
            setSection('')
            setProfileObj({ profileObj, interacObj, availabilityObj })
          } else {
            $('#hourly').addClass('error')
            setShowError(true)
            setTimeout(() => {
              $('#hourly').removeClass('error')
              setShowError(false)
            }, 3000)
          }
        }}
      >
        <div className='red-btn'>Continue</div>
      </div>
    </div>
  )
}

export default JobProfile
