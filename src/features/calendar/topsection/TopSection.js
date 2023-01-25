import React, { useRef, useState } from 'react'
import { Nav } from 'react-bootstrap'
import './topsection.style.scss'
import DropDown from '../../../components/dropdown'
import DownIcon from '../../../icons/Down.icon'
import CloseIcon from '../../../icons/Close.icon'
import {
  useCalendarContext,
  VERSIONS
} from '../../../pages/calendar/calendar.context'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function TopSection () {
  const [date, setDate] = useState(MONTHS[0])
  const { startDate, endDate, timeVersion, setTimeVersion } =
    useCalendarContext()
  const [availabilityShow, setAvailabilityShow] = useState(false)
  const dropRef = useRef()
  return (
    <div id='top-section'>
      {!availabilityShow && (
        <div className='d-flex w-100 align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <DropDown
              ref={dropRef}
              id='end_day'
              toggleEvent={() => dropRef.current.getAlert('end_day')}
              textColor={'#282828'}
              onSelect={setDate}
              selectedValue={date + ' ' + new Date().getFullYear()}
              backBtn={<DownIcon />}
              list={MONTHS}
            />

            <Nav>
              <Nav.Item>
                <Nav.Link
                  eventKey={VERSIONS[0]}
                  onClick={() => {
                    setTimeVersion(VERSIONS[0])
                  }}
                >
                  Monthly
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey={VERSIONS[1]}
                  onClick={() => {
                    setTimeVersion(VERSIONS[1])
                  }}
                >
                  Yearly
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className='d-flex' onClick={() => setAvailabilityShow(true)}>
            <div className='red-btn'>Set availability</div>
          </div>
        </div>
      )}
      {availabilityShow && (
        <div className='d-flex align-items-center'>
          <div className='d-flex info flex-column'>
            <h5>Set availability</h5>
            <small>
              Select dates or a range for the next 30 days. Unspecified dates ar
              auto set to unavailable
            </small>
          </div>

          <div className='date-bubble'>
            <h6>Date</h6>
            {!!startDate.length && startDate !== endDate && (
              <span>{startDate}</span>
            )}
            {!!startDate.length && startDate === endDate && (
              <span>
                {startDate} - {endDate}
              </span>
            )}
          </div>
          <div
            className='availabilty-btn'
            style={{
              background: !!startDate.length ? '#CE1449' : '#DDDDDD'
            }}
          >
            Set availability
          </div>

          <div className='btn-outline-pink'>Sync google calendar</div>
          <div className='close' onClick={() => setAvailabilityShow(false)}>
            <CloseIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default TopSection
